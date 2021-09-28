import { useCallback, useState } from "react";
import "./EditTodoModal.css";

const EditTodoModal = ({setModal, chosenTodo}) => {
    const [editedTodo, setEditedTodo] = useState('')

    const onNewTodoChange = (e) => {
        setEditedTodo(e.target.value);
    }

    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!editedTodo.trim()) return; //Avoid empty todos
        chosenTodo.content = editedTodo;
        setModal(false);
    }, [editedTodo]);

    return (
            <div className="center popup"> 
                <div className="editIcon">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 17.416V22H4.58397L18.1097 8.47423L13.5258 3.89026L0 17.416ZM21.6425 4.94152C22.1192 4.46479 22.1192 3.68857 21.6425 3.21184L18.7882 0.35755C18.3114 -0.119183 17.5352 -0.119183 17.0585 0.35755L14.8215 2.59453L19.4055 7.1785L21.6425 4.94152Z" fill="#E94560"/>
                    </svg>
                </div>
                <div className="editTitle">
                    <p>Edit Todo: {chosenTodo.content}</p>
                </div>
                <form className="editForm">
                    <input type="text"
                        autoComplete="off"
                        placeholder="Edit Todo..."
                        onChange={onNewTodoChange} />
                    <div className="editForm_buttons">
                        <button onClick={formSubmitted}>submit</button>
                        <button onClick={() => setModal(false)}>cancel</button>
                    </div>
                </form>
            </div>
    )
}

export default EditTodoModal
