/**
 * 在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。
 * Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
 */

import "../index.css";
import React from "react";
import ReactDom from "react-dom";

export function FancyBorder(props) {
    return <div className="fancy-border">{props.children}</div>;
}

function WelcomeDialog(props) {
    return (
        <FancyBorder>
            <div>The information i want.</div>
            <Picture></Picture>
        </FancyBorder>
    );
}

function Box(props) {
    return (
        <div className="box">
            {props.left}
            {props.right}
        </div>
    );
}

function SmallBox(props) {
    return <div className={"small-box " + props.type}></div>;
}

function Picture(props) {
    return (
        <Box
            left={<SmallBox type="box-warning"></SmallBox>}
            right={<SmallBox type="box-danger"></SmallBox>}
        ></Box>
    );
}

ReactDom.render(
    <WelcomeDialog></WelcomeDialog>,
    document.getElementById("root")
);
