import React from "react";
import ReactDOM from "react-dom";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {" "}
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            isNextX: true,
        };
    }

    handleClick(i) {
        let squares = this.state.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.isNextX ? "X" : "O";

        this.setState({
            squares: squares,
            isNextX: !this.state.isNextX,
        });
    }

    renderSequare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            ></Square>
        );
    }

    render() {
        let winner = calculateWinner(this.state.squares);
        let status;

        if (winner) {
            status = "Winner " + winner;
        } else {
            status = "Next Player " + (this.state.isNextX ? "X" : "O");
        }

        return (
            <div>
                {" "}
                <div className="status"> {status}</div>{" "}
                <div className="boader-row">
                    {" "}
                    {this.renderSequare(0)}
                    {this.renderSequare(1)}
                    {this.renderSequare(2)}
                </div>{" "}
                <div className="boader-row">
                    {" "}
                    {this.renderSequare(3)}
                    {this.renderSequare(4)}
                    {this.renderSequare(5)}
                </div>{" "}
                <div className="boader-row">
                    {" "}
                    {this.renderSequare(6)}
                    {this.renderSequare(7)}
                    {this.renderSequare(8)}
                </div>{" "}
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < squares.length; i++) {
        let [a, b, c] = lines[i];

        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }

    return null;
}
