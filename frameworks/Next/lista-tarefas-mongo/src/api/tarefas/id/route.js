//requisições PUT e DELETE com id

import connectMongo from "@/services/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(body, {parametros}) {
    try {
        await connectMongo(); //cpnecta com o bd
        const data = tarefa.json(); //converte a tarefa em json
        const body = await tarefa.findByIdAndUpdate(
            parametros.id,//tarefa que sera atualizada
            data,//dados que serão atualizasados
            {new: true, runValidator: true} // retorna a tarefa atualizada 
        );
        if(!body){
            return NextResponse.json({error: "tarefa não encontrada"}, {status:404});
        };
        return NextResponse.json(body,{status:200});
    }catch (error) {
        return NextResponse.json (
            { error: "Erro ao atualiazar as tarefas"},
            { status: 500 }
        );
    }
}

//DELETE
export async function DELETE (tarefa, {parametro}) {
    try{
        await connectMongo();
        const deletetarefa = await tarefa.deleteOne({
            _id: parametro.id
        });
        if(!deletetarefa){
            return NextResponse.json({success: false},{status:404});
        }
        return NextResponse.json({success: 200});
    }catch (error) {
        return NextResponse.json(
            { error: "Erro ao Deletar as tarefas" },
            { status: 500 }
        );
    }
}