const express = require("express");

const router = express.Router();

// ─── Tarefa A — Avisos ────────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const avisos = [];
let proximoId = 1;

// GET /avisos — lista todos os avisos.
router.get("/", (req, res) => {
  res.status(200).json(avisos);
});

// POST /avisos — cria um aviso { titulo, mensagem } (ambos TEXTO/string).
router.post("/", (req, res) => {
  const {titulo, mensagem} = req.body;

  if (typeof titulo !== "string" ||
      typeof mensagem !== "string" ||
      !titulo ||
      !mensagem) 
  {
    return res.status(400).json({erro: "titulo e mensagem são obrigatórios"});
  }

  const aviso = {
    id: proximoId++,
    titulo,
    mensagem,
  };

  avisos.push(aviso);

  res.status(201).json(aviso);
});

module.exports = router;
