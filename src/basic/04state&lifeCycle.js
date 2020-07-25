import React from "react";
import ReactDom from "react-dom";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    render() {
        return (
            <div>
                <h1>Current Time</h1>
                <p>{this.state.date.toString()}</p>
                <Bar time={this.state.date.toString()}></Bar>
            </div>
        );
    }
}

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 20,
        };
    }
    render() {
        return (
            <div>
                <code>{this.state.date}</code>
            </div>
        );
    }
    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        console.log(this.state.c);
        this.setState((state, props) => ({
            date: `${state.c}世纪 ${props.time}`,
        }));
    }
}

ReactDom.render(<Clock />, document.getElementById("root"));
