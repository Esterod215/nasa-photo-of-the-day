import React from "react";
import './components.css'

export default function NasaPicture (props) {
    console.log("here",props)
    return(
        <>
        <p>{props.title}</p>
    <img src={props.nasaImage} alt="nasa pic of day" />
    
    </>
    )
}