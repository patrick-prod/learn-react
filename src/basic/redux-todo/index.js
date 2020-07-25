import React from "react";
import ReactDom from "react-dom";

import "./index.css";

import store from "./store";
import {
    getInputChangeAction,
    clearTodoListAction,
    addTodoItemAction,
    finishTodoItemAction,
} from "./store/actionCreators";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.state = store.getState();
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <div className="todo-container">
                <h1>React Todo</h1>
                <h3>Intended</h3>
                <TodoList
                    list={this.state.intended}
                    status="intended"
                ></TodoList>
                <h3>Completed</h3>
                <TodoList
                    list={this.state.completed}
                    status="completed"
                ></TodoList>
                <TodoController thing={this.state.thing}></TodoController>
            </div>
        );
    }
}

class TodoController extends React.Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleInput(e) {
        let value = e.target.value;
        const action = getInputChangeAction(value);
        store.dispatch(action);
    }
    handleAdd(e) {
        e.preventDefault();
        const action = addTodoItemAction();
        store.dispatch(action);
    }
    handleClear(e) {
        e.preventDefault();
        const action = clearTodoListAction();
        store.dispatch(action);
    }
    handleStoreChange() {
        store.setState(store.getState());
    }
    render() {
        return (
            <div className="todo-controller">
                <input
                    type="text"
                    value={this.props.thing}
                    onChange={this.handleInput}
                />
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleClear}>clear</button>
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = this.props.list;
        const status = this.props.status;
        return (
            <div className="todo-list">
                {list.map((item, idx) => {
                    return (
                        <TodoItem
                            status={status}
                            todoItem={item}
                            todoIdx={idx}
                            key={idx}
                        ></TodoItem>
                    );
                })}
            </div>
        );
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        const action = finishTodoItemAction(this.props.todoIdx);
        store.dispatch(action);
    }
    render() {
        return (
            <div className={"todoItem " + this.props.status}>
                <div>{this.props.todoItem}</div>
                {this.props.status === "intended" && (
                    <div onClick={this.handleClick}>×</div>
                )}
            </div>
        );
    }
}

ReactDom.render(<Todo></Todo>, document.getElementById("root"));
