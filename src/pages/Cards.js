import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import "./styles/card.css";

export default function CssCard({ data, setCardData }) {
  return (
    <div>
      <div className="css-container">
        <div className="css-wrapper">
          {data?.map((card) => {
            return (
              <div className="css-card">
                <button
                  className="btn btn-outline-danger close"
                  onClick={() => setCardData(null)}
                >
                  X
                </button>
                <div className="css-author modal-header">
                  <h1>{card?.author}</h1>
                </div>
                <div className="css-links">
                  {card.url.map((links) => {
                    return (
                      <div className="css-videos">
                        <VideoPlayer url={links} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
