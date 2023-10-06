const TipoPag = require ("../models/TipoPagamento");
const mongoose = require("mongoose");

module.exports = {
    async store(req, res){
        const {tipo} = req.body;

        const tipopag = await TipoPag.create({
            tipo
        });
        return res.json(tipopag);
    }
};