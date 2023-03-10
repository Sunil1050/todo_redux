import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, editTodo } from './redux/actions/todoActions'
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./components/TodoItem";
import './App.css'

localStorage.setItem("todoList", JSON.stringify([]));

const App = () => {
  const [userInput, setUserInput] = useState("")
  const globalState = useSelector((state) => state.allTodos)
  const dispatch = useDispatch();

  const onAdd = () => {
    if (userInput.length > 0) {
      dispatch(addTodos({ todo: userInput, isChecked: false, id: uuidv4() }))
      setUserInput("")
    }
    else {
      alert("Please enter your task");
    }


  }

  const onEditTodo = (input, id) => {
    const editedTodoList = globalState.todos.map(item => {
      if (item.id === id) {
        return { ...item, todo: input }
      }
      return item;
    })
    dispatch(editTodo(editedTodoList))
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
        {globalState.todos.map(item => {
          return <TodoItem key={item.id} eachTodo={item} onEditTodo={onEditTodo} />
        })}
      </ul>
      {/* <div className="mt-4">
        <button type="button" className="btn btn-info mr-2" onClick={onSave}>Save</button>
        <button type="button" className="btn btn-secondary">Clear</button>
      </div> */}
    </div>
  )
}
export default App;




















































