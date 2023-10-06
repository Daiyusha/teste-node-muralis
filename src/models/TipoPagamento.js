const mongoose = require("mongoose");

const TipoPagamentoSchema = new mongoose.Schema({
    tipo: String
});

module.exports = mongoose.model("TipoPagamento", TipoPagamentoSchema);