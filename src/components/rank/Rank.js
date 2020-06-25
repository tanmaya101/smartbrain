import React from 'react';


const Rank=({name,entries})=>{
return(
	<div className="tc ma4">
		<div className="f3 white " >
			<p className="ma0">{`${name},your current entry count is`}</p>
		</div>
		<div className="f2 white "> 
			<p className="ma0">{`${entries}`}</p>
		</div>
	</div>
	)
}

export default Rank;