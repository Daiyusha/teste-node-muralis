const express = require("express");
const CategoriasController = require("./controllers/CategoriasController");
const TipoPagamentoController = require("./controllers/TipoPagamentoController");
const DespesasController = require("./controllers/DespesasController");
const routes = express.Router();

routes.post("/api/categorias", CategoriasController.store);
routes.post("/api/tipopag", TipoPagamentoController.store);
routes.post("/api/despesas", DespesasController.store);
routes.get("/api/despesas", DespesasController.getByMonth);

module.exports = routes;