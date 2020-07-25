import React from "react";
import ReactDom from "react-dom";
import { FancyBorder } from "./09composition";

const scales = {
    c: "Celsius",
    f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <div>
                <FancyBorder>
                    <p>Enter a {scales[scale]} temperature:</p>
                    <input
                        type="text"
                        onChange={this.onChange}
                        value={temperature}
                    />
                </FancyBorder>
            </div>
        );
    }
}

class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: "",
            scale: "",
        };
    }
    handleCelsiusChange(temperature) {
        this.setState({ scale: "c", temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: "f", temperature });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const fahrenheit =
            scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);
        const celsius =
            scale === "c" ? temperature : tryConvert(temperature, toCelsius);
        return (
            <div>
                <br />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                ></TemperatureInput>
                <br />
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                ></TemperatureInput>
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

ReactDom.render(<Calculate></Calculate>, document.getElementById("root"));
