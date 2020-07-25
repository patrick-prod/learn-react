import React from "react";
import ReactDOM from "react-dom";

let imgPath = "http://image.innoweb.cn/2020-07-13-images.png";

let name = {
    firstName: "Bo",
    lastName: "Wang",
};

let element = (
    <div>
        {" "}
        <h1>Welcome {formatName(name)}</h1>{" "}
        <img src={imgPath} className="img" />{" "}
    </div>
);

function formatName(name) {
    return name.lastName + name.firstName;
}

ReactDOM.render(element, document.getElementById("root"));
