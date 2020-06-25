import React,{Component} from 'react';
import './App.css';

import FaceRecognition from './components/faceRecogniton/FaceRecogniton';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import 'tachyons';
import Rank from './components/rank/Rank';
import SignIn from './components/signIn/signIn';
import Register from './components/register/register';
import Particles from 'react-particles-js';




const particlesParams={
						    "particles": {
						        "number": {
						            "value": 100,

						        },
						        "size": {
						            "value": 3
						        }
						    },
						    "interactivity": {
						        "events": {
						            "onhover": {
						                "enable": true,
						                "mode": "repulse"
						            }
						        }
						    }}


const initialState={
			input:'',
			imageUrl:'',
			box:{},
			route:'signin',
			isSignedIn:false,
			user:{

					id:'',
					name:'',
					email:'',
					entries:0,
					joined:''

			}

}
class App extends Component {
	constructor(){
		super();
		this.state=initialState;
	}

	loadUser=(data)=>{
		this.setState({user:{
				id:data.id,
				name:data.name,
				email:data.email,
				entries:data.entries,
				joined:data.joined
						
		}})
	}

	 calculateFaceLocation=(data)=>{
	 	console.log(data.outputs[0].data.regions.length);
	const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
	 	 const image=document.getElementById('imageFace');
	 	 const width=Number(image.width);
	 	 const height=Number(image.height);
	 	 
	 	 return{
	 	 	leftCol: clarifaiFace.left_col*width,
	 	 	topRow:clarifaiFace.top_row*height,
	 	 	rightCol:width-(clarifaiFace.right_col*width),
	 	 	bottomRow:height-(clarifaiFace.bottom_row*height)

	 	 }
	 	 	

	 }

	 displayFaceBox=(box)=>{
	 	
	 	this.setState({box:box});
	 }

	onInputChange=(event)=>{
		this.setState({input:event.target.value});
	}


	onButtonSubmit=()=>{
		this.setState({imageUrl:this.state.input});
		fetch('https://peaceful-harbor-79008.herokuapp.com/imageurl',{
				method:'post',
				headers:{'Content-type':'application/json'},
				body:JSON.stringify({
					input:this.state.input
				})
			})
		.then(response=>response.json())
		.then(response=>{
		if(response){
			fetch('https://peaceful-harbor-79008.herokuapp.com/image',{
				method:'put',
				headers:{'Content-type':'application/json'},
				body:JSON.stringify({
					id:this.state.user.id
				})
			})
			.then(resp=>resp.json())
			.then(count=>{
				this.setState(Object.assign(this.state.user,{entries:count}))
			})
		}
		this.displayFaceBox(this.calculateFaceLocation(response))})
	.catch(err=>console.log(err));
	}

	onRouteChange=(route)=>{
		if(route==="signin"){
			this.setState(initialState)
		}
		else if(route==="home"){
			this.setState({isSignedIn:true})
		}
		this.setState({route:route})
	}

	

	render(){
		const {isSignedIn,imageUrl,route,box,user}=this.state;
		 return (<div>
		 	<Particles className="particles"	params={particlesParams} />

		<Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
		{route==='home'?<div>
		<Logo />
        <Rank name={user.name} entries={user.entries}/>
   		<ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      	<FaceRecognition box={box} imageUrl={imageUrl}/>
     	 </div>
     	 :
        (route==='signin'?<SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:
        	<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
    	)
    }
     
     </div>

   
  )

	}
 
}

export default App;
