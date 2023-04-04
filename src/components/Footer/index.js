import React from "react";
import "./index.css";
import { Button } from "antd";

const Footer = (props) => {
  const { todoList, allChecked, clearAllDone } = props;
  const doneCount = todoList.reduce((pre, todo) => 
    // pre是上一次的返回值，todo是当前的值
    // 如果todo.check为true，返回pre+1，否则返回pre
    // pre是一个累加器，初始值为0
    pre + (todo.check ? 1 : 0), 0
  );
  const allCount = todoList.length;
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          onChange={(e) => allChecked(e.target.checked)}
          checked={doneCount === allCount && allCount !== 0 ? true : false}
        />
      </label>
      <span>
        <span>已完成</span> / 全部{todoList.length}
      </span>
      <Button type="primary" ghost onClick={() => clearAllDone()}>
        清除已完成任务
      </Button>
    </div>
  );
};

export default Footer;
