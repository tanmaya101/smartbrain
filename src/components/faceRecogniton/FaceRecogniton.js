import React from 'react';
import './faceRecognition.css'

const FaceRecognition =({imageUrl,box})=>{
	return(
		<div className="center">
		<div className="absolute mt2">
			<img id="imageFace"alt='' src={imageUrl} width="400px" height="auto"/>
			<div className="bounding-box" style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
			</div>
		</div>
		)
}

export default FaceRecognition;