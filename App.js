import React, { Component } from 'react';
import logo from './logo.svg';
import Capture1 from './Capture1.JPG';
import tunis from './tunis.jpg';
import sousse from './sousse.jpg';
import sfax from './sfax.jpg';
import './App.css';
import Box from './components/box';
import Bloc from './components/image';
class App extends Component {
  render() {
    return (
      <div>
      <p className="titre" style={{ color:" black", textShadow:" black 0.01em  0.01em",
      fontWeight: "Bold",fontFamily: "times",fontSize: "30px",marginLeft: "50px"}}>Nos Programm</p>
        
      <Box color="#DAECF3"  titre={"FULL TIME PROGRAM"} margL="30px"  colort="#878787" colorbt="#DAECF3" colorp="#878787" pg={"un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise."}/>
      <Box color="#FE424D" titre={"PART TIME PROGRAM"} colorbt="#FE424D" pg={"Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends "} />
      <Box color="#1AA6B7" titre={"KIDS CODING PROGRAM"} colorbt="#1AA6B7" pg={"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie."} />
      <Box color="#022D41" titre={"SUMMER ACADEMY"} colorbt="#022D41" pg={"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie."} />
      <img src={Capture1} className="cap1" style={{ position:"absolute",top:"55%",right:"0%",left:"0",
        zIndex:"-1",height:"110%",width:"100%",margin:"auto" }}  alt="capt" />
      <p className="titre1" style={{  color:" black", textShadow: "black 0.01em  0.01em",
        fontWeight: "Bold",fontFamily: "times",fontSize: "30px",color:"#444444",position:"relative",
        zIndex:"2",marginTop: "600px",textAlign:"center"}} >Ou se passent les sessions ?</p>
      <p className="titre2" style={{color:"black", textShadow:"black 0.01em  0.01em",
        fontweight:"Bold",fontFamily:"times",fontSize:"20px",color:"#7C7C7C",position:"relative",
        zIndex:"2",marginTop:"60px",textAlign:"center"}} >Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes suivantes: L'hébergement est possible dans la limite des places disponibles.</p>
      <img src={tunis} className="cap" style={{ display:"inlineBlock",margin:"20px",width:"450px",
          height:"300px",opacity:"1"}}  alt="capt" />
      <img src={sousse} className="cap" style={{ display:"inlineBlock",margin:"20px",width:"450px",
          height:"300px",opacity:"1"}}  alt="capt" />
      <img src={sfax} className="cap" style={{ display:"inlineBlock",margin:"20px",width:"450px",
          height:"300px",opacity:"1"}} alt="capt" />


      <Bloc titre4={"TUNIS"} />
      <Bloc titre4={"SOUSSE"} />
      <Bloc titre4={"SFAX"} />

      </div>


    );
  }
}


export default App;
