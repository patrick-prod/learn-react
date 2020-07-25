import React from "react";
import ReactDom from "react-dom";

import "./index.css";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this);
        this.handleDelTodoItem = this.handleDelTodoItem.bind(this);
        this.handleClearTodoItems = this.handleClearTodoItems.bind(this);
        this.state = {
            intended: ["something to do"],
            completed: ["something completed"],
        };
    }
    handleAddTodoItem(e, thing) {
        e.preventDefault();
        let intended = this.state.intended.slice();
        intended.push(thing);
        this.setState({
            intended: intended,
        });
    }
    handleDelTodoItem(e, status, idx) {
        e.preventDefault();
        let items = this.state[status];
        let removeItem = this.state[status][idx];
        items = [...items.slice(0, idx), ...items.slice(idx + 1)];
        let completed = this.state.completed.slice();
        completed.push(removeItem);
        this.setState({
            [status]: items,
            completed: completed,
        });
    }
    handleClearTodoItems(e) {
        e.preventDefault();
        this.setState({
            intended: [],
            completed: [],
        });
    }
    render() {
        return (
            <div className="todo-container">
                <h1>React Todo</h1>
                <h3>Intended</h3>
                <TodoList
                    list={this.state.intended}
                    status="intended"
                    onFinishItem={this.handleDelTodoItem}
                ></TodoList>
                <h3>Completed</h3>
                <TodoList
                    list={this.state.completed}
                    status="completed"
                ></TodoList>
                <TodoController
                    onAddTodoItem={this.handleAddTodoItem}
                    onClearTodoItems={this.handleClearTodoItems}
                ></TodoController>
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
        this.state = {
            thing: "",
        };
    }
    handleInput(e) {
        let thing = e.target.value;
        this.setState({
            thing: thing,
        });
    }
    handleAdd(e) {
        e.preventDefault();
        let thing = this.state.thing;
        if (thing) {
            this.props.onAddTodoItem(e, thing);
        } else {
            thing = "no thing is everything";
            this.props.onAddTodoItem(e, thing);
        }
    }
    handleClear(e) {
        e.preventDefault();
        this.props.onClearTodoItems(e);
    }
    render() {
        return (
            <div className="todo-controller">
                <input
                    type="text"
                    value={this.state.thing}
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
        this.handleFinishItem = this.handleFinishItem.bind(this);
    }
    handleFinishItem(e, status, idx) {
        this.props.onFinishItem(e, status, idx);
    }
    render() {
        const list = this.props.list;
        const status = this.props.status;
        return (
            <div className="todo-list">
                {list.map((item, idx) => {
                    return (
                        <TodoItem
                            status={this.props.status}
                            todoItem={item}
                            todoIdx={idx}
                            key={idx}
                            onFinishItem={this.handleFinishItem}
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
        this.props.onFinishItem(e, this.props.status, this.props.todoIdx);
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
