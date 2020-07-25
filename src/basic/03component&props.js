import React from "react";
import ReactDom from "react-dom";

function Welcome(props) {
    return <h1>{props.title}</h1>;
}

class WelcomeComp extends React.Component {
    render() {
        // this.change();  error
        return <h1>{this.props.title}</h1>;
    }
    change() {
        this.props.title = "ZOO";
    }
}

function App() {
    return (
        <div>
            <Welcome title="Foo"></Welcome>
            <Welcome title="Bar"></Welcome>
        </div>
    );
}

ReactDom.render(<WelcomeComp />, document.getElementById("root"));
