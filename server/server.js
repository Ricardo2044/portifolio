const express = require('express')
const fs = require('fs')
const cors = require("cors");

const app = express();
const PORTA = 5200;
const caminhoArquivo = "dados.json";

app.use(cors());

app.get("/projetos", (req, res) => {
    try {
        const dados = fs.readFileSync(caminhoArquivo, "utf-8");
        const projetos = JSON.parse(dados);
        res.json(projetos);
    } catch (erro) {
        res.status(500).json({ mensagem: "Falha ao ler o arquivo de dados." });
    }
});

app.listen(PORTA, () =>{console.log(`Rodando no link http://localhost:${PORTA}`) })



