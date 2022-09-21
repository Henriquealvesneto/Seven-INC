const mongodb = require('mongodb');
const mongoose = require('mongoose');

const Funcionarios = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
     birth_date: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }

},
{
    timestamps: true,
});

mongoose.model('funcionarios', Funcionarios);