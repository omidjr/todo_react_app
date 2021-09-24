import "./TodoCollection.css";

const TodoCollection = ({chosenCollection}) => {
    return (
        <p className="todoCollectionName">Collection : {chosenCollection}</p>
    )
}

export default TodoCollection
