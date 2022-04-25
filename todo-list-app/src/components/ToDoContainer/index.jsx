import React from "react";
import { List } from 'antd'
import { CloseCircleTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import { STATUS } from '../../config/status'
import { STYLE } from '../../config/style'

const ToDoContainer = (props) => {
  
  const { todos = [], onOperate, filterStatus } = props;
  const handleOperate = (operate, item) => { 
    switch (operate) { 
      case 'is-delete':
        onOperate && onOperate({
          ...item,
          status: STATUS.IS_DELETE
        })
        break;
      case 'is-done':
        onOperate && onOperate({
          ...item,
          status: item.status === STATUS.IS_DONE ? STATUS.IS_CREATE : STATUS.IS_DONE
        })
        break;
      default:
        break;
    }
  }

  

  const showTodos = todos.filter(todo => { 
    return todo.status !== STATUS.IS_DELETE &&
      filterStatus.indexOf(todo.status.toString()) > -1
  })

  return (
    <div className="todo-container">
      <List
        dataSource={showTodos}
        renderItem={
          todo => (
            <List.Item className={todo.status === STATUS.IS_DONE ? STYLE.IS_DONE : STYLE.IS_STATIC}>
              {todo.content}
              <div className="todo-itme-operate">
                <CloseCircleTwoTone onClick={() => handleOperate('is-delete', todo)}/>
                <CheckCircleTwoTone onClick={() => handleOperate('is-done', todo)}/>
              </div>
            </List.Item>
          )
        }
      ></List>
    </div>
  )
}

export default ToDoContainer