const mongoose = require("mongoose");

const DespesasSchema = new mongoose.Schema({
    valor: Number,
    data_compra: Date,
    descricao: String,
    tipo_pagamento_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TipoPagamento"
    },
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria"
    }

});

module.exports = mongoose.model("Despesas", DespesasSchema);