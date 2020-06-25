import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
	return(
	<div>
		
		<p className="tc white f4">{'This Magic Brain will detect faces in your pictures.Give it a try.'}</p>
		
		<div className="center">
			<div className="form center pa4 br3 shadow-5">
				<input type="text" className="w-70 pa2 center f4" onChange={onInputChange} />
				<button className="w-30 grow link ph3 dib pv2 bg-light-purple pointer white shadow-5 b--white" onClick={onButtonSubmit}>{'Detect'}</button>
			</div>
		</div>
	</div>
		)
}

export default ImageLinkForm;