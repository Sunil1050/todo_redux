import React, { useState, useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
import { useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../../redux/actions/todoActions"
import './index.css'

const TodoItem = ({ eachTodo }) => {
    const inputRef = useRef("")
    const { todo, id, isChecked } = eachTodo
    const [inputitem, setInputItem] = useState(todo)
    const [todoItem, setTodoItem] = useState(todo)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const onEditTodo = (event) => {
        setInputItem(event.target.value)
    }

    const onDelete = () => {
        dispatch(deleteTodo(id))
    }

    const onSaveChanges = () => {
        setTodoItem(inputitem)
        setShow(false)
        // dispatch(addTodos({ todo: todoItem, isChecked: isChecked, id: id }))
    }

    const onChangeCheckbox = (event) => {
        console.log('Checbox id: ', event.target.id)
        console.log('isChecked: ', isChecked)
        if (event.target.id === id) {
            dispatch(completeTodo(isChecked, id))
        }
    }

    return (
        <li class="todo-item-container d-flex flex-row">
            <input ref={inputRef} type="checkbox" id={id} className="checkbox-input" onChange={onChangeCheckbox} />
            <div className="label-container d-flex flex-row rounded">
                <label htmlFor={id} className={`${isChecked ? 'checkbox-complete-label' : 'checkbox-label'}`}>{todoItem}</label>
                <div className="delete-icon-container">
                    <button type="button" className="delete-button">
                        <FiEdit className="edit-icon" onClick={handleShow} />
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Edit your Todo..!!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <input type="text" placeholder='Enter your task' className="form-control" onChange={onEditTodo} value={inputitem} />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={onSaveChanges}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </button>
                    <button type="button" className="delete-button" onClick={onDelete}>
                        <MdDelete className="delete-icon" />
                    </button>
                </div>
            </div>
        </li >
    )
}

export default TodoItem;