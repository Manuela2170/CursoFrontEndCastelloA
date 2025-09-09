//rotas GET e POST
import { NextResponse } from "next/server";

//get
export async function GET() {
    try {
        await connectMongo(); //conecta com o mongodb
        const tarefas = await tarefas.find({})//retporna as tarefas
        //udasndo o método NextResponse -> fazer as requisições http
        return NextResponse.json(tarefas, { status: 200 });

    } catch (error) {
        return NextResponse.json(
            {error: "Erro ao buscar as tarefas"},
            {status: 500}
        );

    }
    
}

//post
export async function POST(tarefa) {
    try {
        await connectMongo();
        const data = await tarefa.json(); //trasnfroma os dados em json para enviar na requisão http
        const body = await tarefa.create(data); //criar a terafa no bd
        return NextResponse.json(body, {status: 201});

    } catch (error) {
        return NextResponse.json(
            {error: "Erro ao criar as tarefas"},
            {status: 500}
        );

    }

}