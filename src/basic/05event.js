import React from "react";
import ReactDom from "react-dom";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            id: "btn",
        };
        // this.handleClick = this.handleClick.bind(this); 这种写法绑定的this在传入额外参数的时候e会出问题、
    }
    handleClick(e, id) {
        console.log(e);
        e.preventDefault();
        console.log(id);
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <button onClick={(e) => this.handleClick(e, this.state.id)}>
                {this.state.isOpen ? "ON" : "OFF"}
            </button>
        );
    }
}

ReactDom.render(<Toggle />, document.getElementById("root"));
