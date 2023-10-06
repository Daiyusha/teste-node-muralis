const Categoria = require ("../models/Categoria");
const mongoose = require("mongoose");

module.exports = {
    async store(req, res){
        const {nome, descricao} = req.body;

        const categoria = await Categoria.create({
            nome,
            descricao
        });
        return res.json(categoria);
    }
};