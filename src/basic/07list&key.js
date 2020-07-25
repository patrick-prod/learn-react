import React from "react";
import ReactDom from "react-dom";

let nums = [1, 2, 3];

let listItems = nums.map((item) => <li key={item}>{item}</li>);
// let listArrays = [<li>1</li>, <li>2</li>];

let element = (
    <ul>
        {listItems}
        {/* {listArrays} */}
    </ul>
);

function Row(props) {
    return <li>{props.value}</li>;
}

function NumberList(props) {
    let list = props.nums;
    return (
        <ul>
            {list.map((item) => (
                <Row value={item} key={item.toString()}></Row>
            ))}
        </ul>
    );
}

ReactDom.render(
    <NumberList nums={nums}></NumberList>,
    document.getElementById("root")
);
