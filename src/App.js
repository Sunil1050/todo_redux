import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from './redux/actions/todoActions'
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./components/TodoItem";
import './App.css'

const App = () => {
  const [userInput, setUserInput] = useState("")
  const todos = useSelector((state) => state.allTodos.todos);
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addTodos({ todo: userInput, isChecked: false, id: uuidv4() }))
    setUserInput("")
  }

  const handleEvent = (event) => {
    setUserInput(event.target.value)
  }

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <input type="text" placeholder="Whats needs to be done?" className="input-ele" onChange={handleEvent} value={userInput} />
      <button type="button" className="add-btn" onClick={onAdd}>Add</button>
      <h1 className="todo-items-heading">
        My <span className="todo-items-heading-subpart">Tasks</span>
      </h1>
      <ul class="todo-items-container" type="none" id="todoItemsContainer">
        {todos.map(item => {
          return <TodoItem key={item.id} eachTodo={item} />
        })}
      </ul>
    </div>
  )
}
export default App;