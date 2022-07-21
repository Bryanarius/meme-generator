import React from "react"
import Troll from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src ={Troll} 
            className= "header--image"
            />
            <h1 className="header--title">Meme Generator</h1>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}