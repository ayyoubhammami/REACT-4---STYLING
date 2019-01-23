import React, {Component} from "react";

class image extends Component {
	render() {
		return(

			<div className="titre4" 
			style={{  display:"inline-block",margin:"20px",marginTop:"-50px",textAlign:"center",
			width:"450px",height:"300px"}} >
				
				<h1>{this.props.titre4}</h1>
			</div>
			
		);
	}
}

export default image;