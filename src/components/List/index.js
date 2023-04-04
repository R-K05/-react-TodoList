import React from "react";
import "./index.css";
import { Button } from "antd";

const List = (props) => {
  const {
    todoList, // 从props中解构出todoList
    updataTodo,
    delTodo,
  } = props;

  const todoLists = todoList.map((todoList) => (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todoList.check}
          onChange={(e) => updataTodo(todoList.id, e.target.checked)}
        />
        <span>{todoList.name}</span>
      </label>
      <Button
        type="primary"
        size="small"
        danger
        ghost
        // style={{ display: mouse ? "block" : "none" }}
        onClick={() => delTodo(todoList.id)}
      >
        删除
      </Button>
    </li>
  ));

  return <ul className="todo-main">{todoLists}</ul>;
};

export default List;
