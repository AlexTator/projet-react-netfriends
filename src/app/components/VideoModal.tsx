import React, {useState} from "react";
import {Video} from "./home/VideoItem";

function VideoModal(props: {video: Video}) {
    const [video, setVideo] = useState([])

    return (
        <div className="Video-modal">
            <div className="video-modal-img"></div>
            <h3>{props.video.title}</h3>
            <p>{props.video.description}</p>
        </div>
    )
}