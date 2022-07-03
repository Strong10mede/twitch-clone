import React from "react";
import "./Stream.css";

function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">offline</div>
              <h2>Check out the below streams from Clever programmer</h2>
            </div>
            <div className="stream__statusInfo">
              <i className="fas fa-bell"></i>
              <p>You will be notified when cleverprogrammer is Live</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            title="stream"
            width="500"
            height="295"
            src="https://www.youtube.com/embed/0pFpFGwL9mA"
            frameholder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-model; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stream;
