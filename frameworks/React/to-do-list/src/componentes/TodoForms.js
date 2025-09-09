import { useState } from "react";

//React DOM

const TodoForm = ({addTask}) => {
    //controle de estado
    const [task, setTask] = useState("");

    //função para adicionar essa tarefa
    const handleSubmit = (e) => {
        //Previnir o comportamentpo padrão do formulario
        e.preventDefault();
        //verificar se não está vazio
        if(task.trim() !== ""){
            addTask(task);//adiciona tarefa no vetor
            setTask("");//Limpa o campo
        }

    };
    //renderização do formulário
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite uma tarefa" value={task} 
            onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TodoForm;