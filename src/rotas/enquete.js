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
  const { opcao } = req.body;
  
  const encontrada = opcoes.find((item) => item.nome === opcao);

  if (!encontrada) {
    return res.status(400).json({ erro: "Opção não encontrada" });
  }

  encontrada.votos += 1;
  res.status(200).json({ mensagem: "Voto registrado com sucesso", opcoes });
});

module.exports = router;

