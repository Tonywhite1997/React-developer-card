import React from "react"
import Buttons from "./buttons"
import About from "./About"
import Interest from "./Interest"
import MyImage from "../picture.jpg"

export default function Main() {
    return (
        <main className="main">
            <img src={MyImage} className="main--image" alt="this is me"/>
            <p className="name">Oluwole Tony</p>
            <p className="stack">Frontend Developer</p>
            <p className="email">tonywhite814.tw@gmail.com</p>
            <Buttons />
            <About />
            <Interest />
        </main>
    )
}