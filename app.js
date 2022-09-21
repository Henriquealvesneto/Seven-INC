const express = require('express');
const mongoose = require('mongoose');

require("./models/Funcionarios");
const Funcionarios = mongoose.model('funcionarios');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/HNdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão MongoDB realizada com sucesso!");
});

app.get("/", (req, res) => {
    Funcionarios.find({}).then((funcionarios) => {
        return res.json(funcionarios);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum funcionário encontrado!"
        })
    })
});

app.get("/funcionarios/:id", (req, res) => {
    
    
    Funcionarios.findOne({id:req.params.id}).then((funcionarios) => {
        return res.json(funcionarios);
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum funcionário encontrado!"
        })
    })

})

app.put("/funcionarios/:id", (req, res) => {
    const funcionarios = Funcionarios.updateOne({id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Funcionário não foi editado com sucesso!"
        });
        return res.json({
            error: false,
            message: "Funcionário editado com sucesso!"
        });
    });
});

app.delete("/funcionarios/:id", (req, res) => {
    const funcionarios = Funcionarios.deleteOne({id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message:"Funcionário não foi apagado com sucesso!"
        });

        return res.json({
            error: false,
            messagem:"Funcionário apagado com sucesso!"
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});

app.post("/funcionarios", (req, res) => {
    const funcionarios = Funcionarios.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error, Funcionário não foi cadastrado com sucesso!"
        })

        return res.status(400).json({
            error: false,
            message: "Funcionário cadastrado com sucesso!"
        })
    })
});

