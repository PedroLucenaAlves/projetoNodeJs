// iniciando lib do express
//express gerencia as rotas que anteriormente montamos manualmente na classe server

import express from "express";

const app = express(); //instancia de express

//criando rotas
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

export default app;

