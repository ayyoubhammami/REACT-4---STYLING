import React, {Component} from "react";

class Box extends Component {
	render() {
		return(

			<div className="box1" style={{backgroundColor:this.props.color,marginLeft:this.props.margL,
				marginRight:this.props.margR,width: "24%",height:" 500px",display: "flex",
			   flexDirection: "column",alignItems: "center",justifyContent: "center",color: "white",
			   display: "inline-block",boxShadow: "2px 2px 5px rgb(53, 53, 52)",verticalAlign: "top"}}>
				
				
				<p style={{textAlign:"center"}}><button className="bt1"  style={{color:this.props.colort,backgroundColor:"transparent",
 					 borderRadius:"10px",color:"white",margin :"auto"}} >{this.props.titre} </button></p>
				<hr className="hr" style={{display: "block",marginTop: "0.5em",marginBottom:"0.5em",
  				marginLeft: "auto",marginRight: "auto",borderStyle: "inset",borderWidth:"1px",
				color:" red"}}></hr>
				<p className="pg1" style={
					{color:this.props.colorp,fontFamily: "roboto",width: "80%",
					color:"white",marginLeft: "20px",textAlign: "justify",
					marginRight:"20px"}}>
					{this.props.pg} 
				</p>
				<button className="bt2" style={{color:this.props.colorbt,backgroundColor:"white",
 					 borderRadius:"10px",marginTop:"140px",position:"absolute",textAlign:"center",
  					marginLeft:"100px",width:"10%",height:"8%",FontWeight:"Bold",boxShadow:"6px 4px 12px rgb(51, 48, 48)",
  					display:"block"}}>En savoir plus</button>
				<h1>{this.props.titre4}</h1>
			</div>
			
		);
	}
}

export default Box;