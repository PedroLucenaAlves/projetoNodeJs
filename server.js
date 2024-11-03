//import htpp from "http"; //biblioteca nativa do node

import app from "./src/app.js";

//criacao de um servidor local para simular um servidor da web

const PORT = 3000;

//o o que o servidor ira escutar "listen"
            //porta de conexao
app.listen(PORT, () => {
    console.log("servidor escutando !");
});



//anteriormente com uso de http

/** 
const rotas = {
    "/": "Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
};
*/

/** 
const server = htpp.createServer((req , res) =>{
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]); //[] serve para passar uma propriedade dentro do objeto rotas (normalmente utilizamos o ".")
});
*/


