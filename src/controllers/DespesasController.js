const Despesas = require("../models/Despesas");
const mongoose = require("mongoose");

module.exports = {
    async store(req, res){
        const {id_tipo_pagamento, id_categoria} = req.headers;
        const {valor, data_compra, descricao} = req.body;

        try{
            const despesas = await Despesas.create({
                valor,
                data_compra,
                descricao,
                tipo_pagamento_id: id_tipo_pagamento,
                categoria_id: id_categoria
            });
            return res.status(200).json({data: despesas._id, success: true});
        } catch (error) {
            return res.status(500).json({data: null, success: false});
        }
    },

    async getByMonth(req, res){
            const dataAtual = new Date();
            const mesAtual = dataAtual.getMonth() + 1;
            try{
            const despesas = await Despesas.aggregate([
                {$addFields: {  "month" : {$month: '$data_compra'}}},
                {$match: {month: dataAtual.getMonth() + 1}}
            ]);
            console.log(mesAtual);
            console.log(dataAtual);
            return res.status(200).json({data: despesas, success: true});
        } catch (error){
            return res.status(500).json({data: null, success: false});
        }
      },
};