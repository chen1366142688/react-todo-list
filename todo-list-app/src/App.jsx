import { useState } from 'react'
import ToDoList from './components/ToDoItem'
import ToDoContainer from './components/ToDoContainer'
import ToDoFilter from './components/ToDoFilter'
import { STATUS } from './config/status'

function App() {
  const [todos, setTodos] = useState([])
  const [filterStatus, setFilterStatus] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`)

  const handleSubmit = (todoItem) => { 
    setTodos([
      ...todos,
      todoItem
    ])
  }

  const handleOperate = (todoItem) => { 
    const newTodos = todos.map(todo => todo.id === todoItem.id ? todoItem : todo)
    setTodos(newTodos)
  }

  const handleFilterStatusChange = (status) => { 
    setFilterStatus(status)
  }

  return (
    <div className="todo-app">
      <h2 className='todo-title'>代办清单</h2>
      <ToDoList onSubmit={handleSubmit} />
      <ToDoFilter
        filterStatus={filterStatus}
        onFilterStatus={handleFilterStatusChange}
      />
      <ToDoContainer
        filterStatus={filterStatus}
        todos={todos}
        onOperate={handleOperate}
      />
    </div>
  )
}

export default App
