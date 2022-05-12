import React from "react";

export type Video = {
    title: string
    description: string
}

function VideoItem(props: { video: Video }) {
    const modal = document.getElementsByClassName(".Video-Modal")

    return (
        <a role="button">
            <div className="Video-item">
                <span>{props.video.title}</span>

            </div>
        </a>
    )
}

export default VideoItem