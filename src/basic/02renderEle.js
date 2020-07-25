import React from "react";
import ReactDOM from "react-dom";
import "../index.css";

function tick() {
    let element = (
        <div>
            <h1>current time</h1>
            <p>{new Date().toLocaleString()}</p>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
