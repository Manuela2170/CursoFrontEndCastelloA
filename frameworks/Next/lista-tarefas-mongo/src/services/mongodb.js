//fazer a conexão com o mongo db 9mongoose)

const { default: mongoose } = require("mongoose")

//arrow function

const connectMongo = async () => {
    mongoose.connect(process.env.DATABASE_URL) //estabelecer conexão com o database
        .then(() => console.log("Conectou com o MongoDB"))
        .catch(err => console.error("Erro ao conectar", err));


    //conexão simples com mongodb
}

export default connectMongo;
//módulo pode ser usado em outras ações do código
