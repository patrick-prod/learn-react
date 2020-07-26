import React from "react";
import { connect } from "react-redux";

import "../../index.css";

import TodoController from "./Controller";
import TodoList from "./List";

class Todo extends React.Component {
    render() {
        return (
            <div className="todo-container">
                <h1>React Todo</h1>
                <h3>Intended</h3>
                <TodoList
                    list={this.props.intended}
                    status="intended"
                ></TodoList>
                <h3>Completed</h3>
                <TodoList
                    list={this.props.completed}
                    status="completed"
                ></TodoList>
                <TodoController></TodoController>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        intended: state.intended,
        completed: state.completed,
    };
};

export default connect(mapStateToProps, null)(Todo);
// 将 TodoUI 和 store 做连接
