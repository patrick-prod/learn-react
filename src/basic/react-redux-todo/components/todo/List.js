import React from "react";

import "../../index.css";
import { connect } from "react-redux";

import TodoItem from "./Item";

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

export default connect(null, null)(TodoList);
