import React from "react";
import VideoItem from "./VideoItem";

function VideoCarousel() {
    const videos = [
        {
            title: "Titre 1",
            description: "Description 1"
        },{
            title: "Titre 1",
            description: "Description 1"
        },{
            title: "Titre 1",
            description: "Description 1"
        },{
            title: "Titre 1",
            description: "Description 1"
        },{
            title: "Titre 1",
            description: "Description 1"
        },{
            title: "Titre 1",
            description: "Description 1"
        },
    ]
    return(
        <div className="Video-carousel">
            <VideoItem video={videos[0]} />
            <VideoItem video={videos[1]} />
            <VideoItem video={videos[2]} />
            <VideoItem video={videos[3]} />
            <VideoItem video={videos[4]} />
            <VideoItem video={videos[5]} />
        </div>
    )
}

export default VideoCarousel