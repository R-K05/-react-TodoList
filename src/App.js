import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import React, { useState } from "react";

function App() {
  const todoListData = [
    { id: "001", name: "vue", check: true },
    { id: "002", name: "react", check: false },
    { id: "003", name: "node.js", check: true },
  ];

  const [todoList, setTodoList] = useState(todoListData);

  // 添加todo
  const addTodo = (todoObj) => {
    const newTodos = [todoObj, ...todoList];
    setTodoList(newTodos);
  };

  // 更新todo
  const updataTodo = (id, check) => {
    const newTodos = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, check };
      } else {
        return item;
      }
    });
    setTodoList(newTodos);
  };

  // 删除todo
  const delTodo = (id) => {
    const newTodos = todoList.filter((item) => {
      // 返回 id 不等于传入的 id 的新数组
      return item.id !== id;
    });
    setTodoList(newTodos);
  };

  // 全选/全不选
  const allChecked = (check) => {
    const newTodos = todoList.map((item) => {
      return { ...item, check: check };
    });
    setTodoList(newTodos);
  };

  // 清除已完成
  const clearAllDone = () => {
    const newTodos = todoList.filter((item) => {
      return item.check === false;
    });
    setTodoList(newTodos);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "25px",
      }}
    >
      <div className="todo-wrap">
        <Header addTodo={addTodo}></Header>
        <List
          todoList={todoList}
          updataTodo={updataTodo}
          delTodo={delTodo}
        ></List>
        <Footer
          todoList={todoList}
          allChecked={allChecked}
          clearAllDone={clearAllDone}
        ></Footer>
      </div>
    </div>
  );
}

export default App;
