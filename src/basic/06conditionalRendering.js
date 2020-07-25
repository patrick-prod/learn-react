import React from "react";
import ReactDom from "react-dom";
import "../index.css";

function WarningTipBar(props) {
    if (!props.isWarnStatus) {
        return null;
    }
    return <div className="warning tipbar">What about making an account?</div>;
}

function VisitorGreeting(props) {
    return <h3>please login</h3>;
}

function GuestGreeting(props) {
    return <h3>hello customer</h3>;
}

function Greeting(props) {
    const isLoginStatus = props.isLoginStatus;
    console.log(isLoginStatus);
    return isLoginStatus ? (
        <VisitorGreeting></VisitorGreeting>
    ) : (
        <GuestGreeting></GuestGreeting>
    );
}

function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class LoginController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginStatus: true,
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLoginClick() {
        this.setState({
            isLoginStatus: !this.state.isLoginStatus,
        });
    }
    handleLogoutClick() {
        this.setState({
            isLoginStatus: !this.state.isLoginStatus,
        });
    }
    render() {
        const isLoginStatus = this.state.isLoginStatus;
        let button;
        if (isLoginStatus) {
            button = (
                <LoginButton onClick={this.handleLoginClick}></LoginButton>
            );
        } else {
            button = (
                <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
            );
        }
        return (
            <div>
                <Greeting isLoginStatus={this.state.isLoginStatus}></Greeting>
                {button}
                <WarningTipBar
                    isWarnStatus={this.state.isLoginStatus}
                ></WarningTipBar>
            </div>
        );
    }
}

ReactDom.render(
    <LoginController></LoginController>,
    document.getElementById("root")
);
