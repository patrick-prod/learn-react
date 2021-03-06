import React from "react";
import { connect } from "react-redux";

import { finishTodoItemAction } from "../../store/actionCreators";

import "../../index.css";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"todoItem " + this.props.status}>
                <div>{this.props.todoItem}</div>
                {this.props.status === "intended" && (
                    <div onClick={this.props.finishTodoItem}>×</div>
                )}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        finishTodoItem(e) {
            e.preventDefault();
            const action = finishTodoItemAction(ownProps.todoIdx);
            dispatch(action);
        },
    };
};

export default connect(null, mapDispatchToProps)(TodoItem);
