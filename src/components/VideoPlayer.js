import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ url }) {
  return (
    <div className="video-card">
      <div className="video-container">
        <ReactPlayer url={url} controls />
      </div>
    </div>
  );
}

export default VideoPlayer;
