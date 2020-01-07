import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaPicture from "./components/NasaPicture";

function App() {
  const [picture, setPicture] = useState({});
  
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=oOZGnPURoxX7xov51NMKCOJa21fjB8HnifkKP6Mm')
    .then(res =>{
      console.log(res.data)
      setPicture(res.data)
      
    })
    .catch(error => {
      console.log("andrews a pig so we couldnt do it")
    })
  },[])
  return (
    <div className="App">
      <NasaPicture nasaImage = {picture.hdurl} title={picture.title}/>
    </div>
  );
}

export default App;
