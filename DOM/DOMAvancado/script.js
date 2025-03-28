//Manipular Html e css pelo Javascript ->DOM avançado

//vamos criar um header
let header = document.createElement("header");
header.style.backgroundColor = "Black";
header.style.color = "Aliceblue";
header.style.textAlign = "center";
header.style.height = "8vh";
header.style.width = "100%";
document.body.appendChild(header); //adicionar header
document.body.style.margin = 0;

//adicionar navbar no header
let navbar = document.createElement("div");
navbar.style.display = "flex";
navbar.style.justifyContent = "space-around";
navbar.style.alignItems = "center";
navbar.style.height = "100%";
navbar.style.width = "100%";
navbar.style.fontFamily = "Comic Sans MS";
navbar.style.fontSize = "4vh";
header.appendChild(navbar); //adicionar navbar -> header

//adicionar elementos a navbar
let menuitens = ["Home", "Sobre", "Produtos", "Contato"];

menuitens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navbar.appendChild(a);
});

//fazer o footer do site

let footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.color = "aliceblue";
footer.style.textAlign = "center";
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.height = "5vh";
footer.style.width = "100%";
document.body.appendChild(footer); // adicionar footer --> body

// criar uma navbarFooter
let navbarFooter = document.createElement("div");
navbarFooter.style.display = "flex";
navbarFooter.style.justifyContent = "space-between";
navbarFooter.style.fontFamily = "Comic Sans MS";
navbarFooter.style.fontSize = "2vh";
navbarFooter.style.width = "100%";
navbarFooter.style.height = "100%";
footer.appendChild(navbarFooter); // adicionar navbarfooter

// itens do footer
let footeritens = ["Copyright \u00A9 2025", "DTB Software", "Limeira/SP"];

footeritens.forEach(item => {
    let p = document.createElement("p");
    p.innerText = item;
    navbarFooter.appendChild(p);
});

// clonagem de elementos com DOM
let btnClonar = document.createElement("button");
btnClonar.innerText = "clonar";
document.body.appendChild(btnClonar);
//criar os card
let card = document.createElement("div");
card.style.width = "150px";
card.style.height = "200px";
card.style.backgroundColor = "black";
card.style.color = "aliceblue";
card.style.margin = "10px";

//conteinercard
let containercard = document.createElement("div");
containercard.style.display = "flex";
containercard.style.justifyContent = "center";
containercard.style.flexWrap = "wrap";
containercard.style.width = "90%";
containercard.style.margin = "auto";

document.body.appendChild(containercard);

//criar a funcao de clonagem (cloneNode)
btnClonar.addEventListener("click", () => {
    let cardclone = card.cloneNode(true);
    containercard.appendChild(cardclone);
});

// modificação de classe com classlist
let checkDarkmode = document.createElement("input");
checkDarkmode.type = "checkbox";
checkDarkmode.id = "darkmode";
let divDarkmode = document.createElement("div");
divDarkmode.style.display = "flex";
divDarkmode.style.justifyContent = "center";
divDarkmode.style.top = "0px";
divDarkmode.style.right = "10px";
divDarkmode.style.position = "absolute";
let p = document.createElement("p");
p.innerText = "Dark Mode";
p.style.color = "aliceblue";
divDarkmode.appendChild(p);
divDarkmode.appendChild(checkDarkmode);
document.body.appendChild(divDarkmode);
//Funcionalidade do darkmode
checkDarkmode.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
});

//Eventos avançados
//envento de teclado
document.addEventListener("keydown", (event)=>{
    console.log("Tecla Pressionada: " + event.key);
});

//eventos com teclado, input com sugestão de pesquisa
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite sua pesquisa";
input.id = "inputPesquisa";
document.body.appendChild(input);
let lista = document.createElement("ul");
lista.style.listStyle = "none";
lista.style.padding = "0";
lista.style.margin = "0";
lista.id = "listaPesquisa";
document.body.appendChild(lista);

let listaitens = ["JavaScript", "HTML", "CSS", "React", "Angular", "Vue", "Node", "Npm" ];

//metodo para sugestão de pesquisa
input.addEventListener("keyup", ()=>{
    lista.innerHTML = "";
    listaitens.forEach(item =>{
        let termo = input.value.toLowerCase();
        if(item.toLowerCase().includes(termo)){
            let li = document.createElement("li");
            li.innerText = item;
            lista.appendChild(li);
            //adicionar a funcao de clicar na palavra
            li.style.cursor = "pointer";
            li.addEventListener("click", ()=>{
                input.value = item;
                lista.innerHTML = "";
            })
        }
    })
});

//fazendo verificação de formularios
let form = document.createElement("form");
form.id = "formCadastro";
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Informe o nome";
form.appendChild(inputNome);
let inputEmail =  document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Informe seu email";
form.appendChild(inputEmail);
let inputSenha =  document.createElement("input");
inputSenha.type = "password";
inputSenha.placeholder = "Informe a senha";
form.appendChild(inputSenha);
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "Submit";
form.appendChild(btnEnviar);
document.body.appendChild(form);

//validação do formulario
let mensagem = document.createElement("p");
document.body.appendChild(mensagem);

form.addEventListener("submit", (event)=>{
    event.preventDefault();//nao deixa o submit recarregar a tela
    let nome = inputNome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;
    if(nome ==="" || email ==="" ||  senha ===""){
        mensagem.innerText = "Todos os campos devem ser preenchidos";
        mensagem.style.color = "red";
    }else{
        mensagem.innerText = "Cadastro realizado com sucesso";
        mensagem.style.color = "green";
        nome = "";
        email = "";
        senha = "";
        form.reset();
    }
});