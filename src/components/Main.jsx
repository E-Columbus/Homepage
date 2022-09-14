import React from "react";
import BGvideo from "../assets/BGvideo.mp4"


const Main = () => {
    return(
    <div id="bg">
        <nav class="menu">
        <div class="menu-logo">
        <h1> CryptoCoders </h1>
    </div>

    <div class="menu-links">
        <ul>
            <li><a href="#"> home </a></li>
            <li><a href="#"> about </a></li>
            <li><a href="#"> services </a></li>
            <li><a href="#"> contact </a></li>
        </ul>
    </div>
    </nav>

    <div id="overlay"></div>
        <video src= {BGvideo} autoPlay loop muted bg />
            <div id="text">
                <h1>WELCOME</h1>
                <p>To CryptoCoders</p>
            <div id="overlay"></div>
        </div>
    <nav class="menu2">Copyright 2022</nav>
</div>
    )
}




export default Main