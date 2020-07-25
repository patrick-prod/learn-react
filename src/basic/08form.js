import React from "react";
import ReactDom from "react-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        e.preventDefault();
        this.setState({
            value: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.value);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInput}
                    />
                    <button type="submit">login</button>
                </form>
            </div>
        );
    }
}

class MultipleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMale: true,
            fullName: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(e) {
        e.preventDefault();
        let target = e.target;
        let name = target.name;
        let value = name === "sex" ? target.checked : target.fullName;
        this.setState({
            [name]: value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(this.state.value, this.state.fullName);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.handleInput}
                    />
                    <input
                        type="checkbox"
                        name="sex"
                        checked={this.state.isMale}
                        onChange={this.handleInput}
                    />
                    <button type="submit">regist</button>
                </form>
            </div>
        );
    }
}

ReactDom.render(
    <div>
        <LoginForm></LoginForm>
        <MultipleForm></MultipleForm>
    </div>,
    document.getElementById("root")
);
