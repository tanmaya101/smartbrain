import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css';
const Logo=()=>{
	return(
		<div>
			<Tilt className="Tilt br3 shadow-2 ml3 b--black-50 " options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 				<div className="Tilt-inner center " >
 					<img alt={'brain'}src={brain} style={{marginTop:"25px"}}/> 
 			 	</div>
			</Tilt>
		</div>
		
		)
}

export default Logo;