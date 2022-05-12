import React from "react";
import Navbar from "../components/Navbar";
import VideoCarousel from "../components/home/VideoCarousel";

function Home() {
    return (
        <div className="App-home">
            <Navbar/>
            <div className="Home-content">
                <h2>To see</h2>
                <VideoCarousel />
                <h2>To see</h2>
                <VideoCarousel/>
            </div>
        </div>
    )
}

export default Home