//para modelar a tarefa vou usar o proprio mongodb
import { default as mongoose } from "mongoose";

const tarefaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O titulo da tarefa é obrigatório"], //pwersonalizar a mensagem de error
        maxlenght: [40, "<5)char"],
        trim: true
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadoEm:{
        type: Date,
        default: Date.now // pegua a data na craçao da tarefa
    }
});

//export do modulo
export default mongoose.models.tarefa || mongoose.model("tarefa", tarefaSchema);
// exporta o modelo como tarefa caso não exista uma tarefa no banco de dados
//se existir usa o modelo do banco