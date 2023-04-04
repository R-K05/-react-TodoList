import React from "react";
import './index.css'

const Header = (props) => {
  const {
    addTodo,// 从props中解构出addTodo方法
  } = props

  const handleKeyUp = (e) => {
    if(e.keyCode !== 13) return
    if(e.target.value.trim() === '') {
        alert('输入不能为空')
        return
    }
    const todoObj = {
      id: Math.floor(10000000 * Math.random()),
      name: e.target.value,
      check: false,
    };
    addTodo(todoObj)
    e.target.value = ''
  }

  return (
  <div className="todo-Header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={(e)=> handleKeyUp(e)}></input>
  </div>
  )
};

export default Header;
