import React, { useEffect } from 'react'
import './PreLoader.css';

function PreLoader(){

    useEffect(() => pageLoaded(), []);
    function pageLoaded(){
        setTimeout(()=>{
            document.getElementById("PreloaderContainer").style.display = "none";
        },2000)
    }

    return (
        <div id="PreloaderContainer">
            <div id="PreloaderContent">
                <img id="imperialLogo" src="assets/imperialLogo.png" alt="imperial logo"></img>
                <p className='preloaderHero'>IMPERIAL</p>
                <p className='preloaderPhrase'>Clínica Integral</p>
                <img id="spiningArrows" src="assets/preloader.gif" alt="animation arrows"></img>
            </div>
        </div>
    )
}
export default PreLoader