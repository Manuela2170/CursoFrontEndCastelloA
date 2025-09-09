
const TodoList = ({task, removeTask}) => {
    return(
        <ul>
            {task.map((task, index)=> (
                    <li key={index}>
                        {task} <button onClick={() => removeTask(index)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;


