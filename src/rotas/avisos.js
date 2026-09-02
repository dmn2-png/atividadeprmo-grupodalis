const express = require("express");

const router = express.Router();

// ─── Tarefa A — Avisos ────────────────────────────────────────────────────────
// Armazenamento EM MEMÓRIA (não use banco de dados neste trabalho).
const avisos = [];
let proximoId = 1;

// GET /avisos — lista todos os avisos.
router.get("/", (req, res) => {
  // TODO (Tarefa A): responda com status 200 e o array `avisos`.
  res.status(200).json(links)
  res.status(501).json({ erro: "não implementado" });
});

// POST /avisos — cria um aviso { titulo, mensagem } (ambos TEXTO/string).
router.post("/", (req, res) => {
  // TODO (Tarefa A):
  //  1. Leia titulo (texto) e mensagem (texto) de req.body.
  //  2. Se faltar titulo OU mensagem, responda 400.
  //  3. Crie { id: proximoId++, titulo, mensagem }, adicione em `avisos`
   //     e responda 201 com o aviso criado.
  const {titulo, url} = req.body;
  if (!titulo || !url) {
    return res.status(400).json({erro: "titulo e url são obrigatórios!"})
  }
  const novoLink = {id: proximoId++, titulo, url};
  links.push(novoLink)
  res.status(501).json({ erro: "não implementado" });
});

module.exports = router;
