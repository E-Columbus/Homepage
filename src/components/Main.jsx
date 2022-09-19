import React from "react";
import BGvideo from "../assets/BGvideo.mp4"


const Main = () => {
    return(
    <div id="bg">
        <nav class="menu">
        <div class="menu-logo">
        <img src="../src/assets/Logo.jpg" width="170" height="115"></img>
    </div>

    <div class="menu-links">
        <ul>
            <li><a href="#"> Login </a></li>
            <li><a href="#"> Register </a></li>
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
        <nav class="menu2"><img src="../src/assets/Logo1.png" width="200" height="100"></img></nav>
        <nav class="menu3"><img src="../src/assets/Logo2.png" width="300" height="100"></img></nav>
        <nav class="menu4"><img src="../src/assets/Logo3.png" width="100" height="85"></img></nav>
</div>
    )
}




export default Main