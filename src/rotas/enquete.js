const express = require("express");

const router = express.Router();


const opcoes = [
  { nome: "Presencial", votos: 0 },
  { nome: "Remoto", votos: 0 },
  { nome: "Híbrido", votos: 0 },
];


router.get("/", (req, res) => {
  res.status(200).json({ opcoes });
});


router.post("/voto", (req, res) => {
  
  // TODO (Tarefa C):
  //  1. Leia `opcao` (texto) de req.body.
  //  2. Procure a opção cujo `nome` seja igual a esse texto em `opcoes`.
  //  3. Se não existir, responda 400.
  //  4. Se existir, incremente `votos` (número) e responda 200.
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;

