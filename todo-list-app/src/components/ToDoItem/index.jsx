import React, { useState } from 'react';
import { Input, Button } from "antd";
import { STATUS } from '../../config/status'

const ToDoItem = (props) => {

  const { onSubmit } = props;

  const [todoItem, setTodoItem] = useState({})

  const handleChange = (event) => { 
    const { value } = event.target;
    if(value)
    setTodoItem({
      id: Math.random(),
      content: value,
      status: STATUS.IS_CREATE
    })
  }

  const handleSubmit = () => { 
    onSubmit && onSubmit(todoItem)
  }
  return (
    <div className='todo-item-input'>
      <Input
        placeholder='请输入代办事项'
        value={todoItem.content}
        onPressEnter={handleSubmit}
        onChange={handleChange}
      />
      <Button size='large' type='primary' onClick={handleSubmit}>提交</Button>
    </div>
   
   )
}

export default ToDoItem