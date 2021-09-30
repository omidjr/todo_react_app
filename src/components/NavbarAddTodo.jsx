import { useCallback, useRef, useEffect } from 'react'

export const NavbarAddTodo = ({todos, setTodos, newTodo, setNewTodo, chosenCollection, setAddModal}) => {    
    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newTodo.trim()) return; //Avoid empty todos
        setTodos([
        {
            id: todos.length ? todos[0].id + 1 : 1,
            content: newTodo,
            done: false,
            collection: chosenCollection
        },
        ...todos
        ]);
        setNewTodo('');
        setAddModal(false);
    }, [newTodo, todos]);

    const onNewTodoChange = useCallback((e) => {
        setNewTodo(e.target.value);
    }, []);

    let addModalRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!addModalRef.current.contains(e.target)) {
                setAddModal(false);
            }
        };
        document.addEventListener("mousedown", handler);
        
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    return (
        <div ref={addModalRef} className="center popup">
            <div className="editIcon">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2V24" stroke="#E94560" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 13H24" stroke="#E94560" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="editTitle">
                <p>Add Todo</p>
            </div>
            <form className="editForm">
                <input type="text"
                    autoComplete="off"
                    placeholder="Add a Todo..."
                    onChange={onNewTodoChange} />
                <div className="editForm_buttons">
                    <button onClick={formSubmitted}>submit</button>
                    <button onClick={() => setAddModal(false)}>cancel</button>
                </div>
            </form>
        </div>
    )
}
