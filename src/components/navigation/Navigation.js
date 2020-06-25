import React from 'react';


	const Navigation=({onRouteChange,isSignedIn})=>{
		
			if(isSignedIn){
				return(
				<nav style={{display:"flex",justifyContent:"flex-end"}} className="pa2 blink link pointer dim underline mr2">
						<p onClick={()=>onRouteChange('signin')} className="f3">Sign out</p>
				</nav>
			)
				
			}else{
				return(
					<nav style={{display:"flex",justifyContent:"flex-end"}} className="pointer underline">
				<p className="pa2 blink link  dim  mr2 f3" onClick={()=>onRouteChange('signin')}>Sign In</p>
				<p className="pa2 blink link  dim  mr2 f3" onClick={()=>onRouteChange('register')} >Register</p>
				
			</nav>
)
				
			}
			
		
	}


export default Navigation;