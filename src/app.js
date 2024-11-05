// iniciando lib do express
//express gerencia as rotas que anteriormente montamos manualmente na classe server

import express from "express"; //Carrega o módulo express para gerenciar rotas e solicitações HTTP.

const app = express(); //instancia de express
app.use(express.json()); //middleware (acesso as reqs e respostas) - todo corpo da req sera convertido para o formato json

const livros = [
    {
        id: 1,
        titulo: "Bíblia"
    },
    {
        id: 2,
        titulo: "Alcorão"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id); //Converte o id em Number para garantir que seja comparado como um número.
    })
}

//criando rotas
//acesso a url base
app.get("/", (req, res) => {
    console.log("rota base localhost:3000");
    res.status(200).send("Curso de Node.JS");
});

//rota para retornar lista de livros
//req do tipo get "pegar"
//callback function = "Após esta operação, execute essa outra função"
//O Express usa callbacks para lidar com requisições. Quando você chama app.get("/livros", (req, res) => { ... }),
// está dizendo ao Express: “Quando alguém acessar o endpoint /livros com uma requisição GET, execute esta função de callback que estou passando.”
app.get("/livros", (req, res) => {
    console.log("Exibindo lista dos livros cadastrados. ");
    console.log(livros);
    res.status(200).json(livros); //resposta sendo interpretada no formato json

});
                        
app.get("/livros/:id", (req, res) => {
    console.log("Acessando rota que busca um livro pelo seu id: ");
    const index = buscaLivro(req.params.id);//id passado como parametro da rota/ id e o nome do parametro que passamos na rota
    res.status(200).json(livros[index]);
});

//criando novos recursos "POST"

app.post("/livros", (req, res) => {
    console.log("Criando um novo livro no nosso sistema! ");
    livros.push(req.body); //req.body = corpo da requisicao
    res.status(201).send("livro cadastrado com sucesso");
});

//alterando nome do livro "PUT" - altera um registro existente

app.put("/livros/:id", (req,res) => {
    console.log("alterando um id")
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo; //substituindo o valor atual pelo valor de titulo
    res.status(200).json(livros);
})


export default app;

