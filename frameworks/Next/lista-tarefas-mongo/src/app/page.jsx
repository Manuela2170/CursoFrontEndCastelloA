//indicar que a pagina é componente cliente site
"use client";

import { useEffect, useState } from "react";

export default function home(){
    //setState -> armazenamento de estado nas variaveis locais
    const [tarefas, settarefas] = useState([]); //array para armazenamento das terefas
    const [novatarefa, setnovatarefa] = useState(""); //sring para adicionar novas tarefas

    //useEffect
    useEffect(()=>{
        fetchtarefas();
    });
    //pegar todas as tarefas
    const fetchtarefas = async () =>{
        //conecta com a api usando o fetch para pegar os dados
        const resposta = await fetch("api/tarefas");
        //transforma os dados em json
        const dados = await resposta.json();
        //atualiza a lista de tarefas com setState
        settarefas(dados.data);
    };

    //adicionar nova tarefa
    const addtarefa = async () =>{
        const resposta = await fetch("api/tarefas",{
            method: "POST",
            header: {"content-type": "application/json"},
            body: JSON.stringify({titulo: novatarefa})
        });
        const dados = await resposta.json() //cov=nverte a resposta em json
        settarefas([...tarefas, dados.data]); //atualiza a lista de tarefa
        setnovaterafa("");//limpa o campo do input
    };

    //deletotarefas
    const deleteTarefa = async (id) =>{
        await fetch(`/api/tarefas/${id}`,{
            method: "DELETE",
        });
        fetchtarefas();
    }
//atualizar tarefas
const atualizattarefa = async (id) =>{
    await fetch (`/api/tarefas/${id}`,{
        method: "PUT"
    });
    fetchtarefas();
}

//contagem de tarefas concluidas
const tarefasConcluidas = tarefas.filter(tarefa => tarefas.concluida).length;
const contagemtarefastotal = tarefas.length

return(
    <div>
        <h1>Lista de Tarefas</h1>
        <input type="text" 
        value={novatarefa}
        onChange={(e)=> setnovatarefa(e.target.value)}/>
        <button onClick={addtarefa}>Adicionar</button>
        <ul>
            {tarefas.map((tarefa)=>(
                <li key={tarefa._id}>
                    {tarefa.titulo} - {tarefa.concluida ? "Concluida" : "Pendente"}
                    {/*<input type="checkbox" 
                    checked = {tarefa.concluida}
                    onChange={()=>updatetarefa(tarefa.id,tarefa.completed)}/>*/}
                    <button onClick={()=>deleteTarefa(tarefa._id)}>Excluir</button>
                </li>
            ))}
        </ul>
        <div>
            <p>Total de tarefas: {contagemtarefastotal} - Concluidas: {tarefasConcluidas}</p>
        </div>
    </div>

)

}