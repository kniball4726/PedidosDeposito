const mongoose = require('mongoose')

const ClienteSchema = new mongoose.Schema(
    {
        cliente:{
            type: String,
            required: true,
            unique: true
        },
        direccion:{
            type: String
        },
        cuit:{
            type: Number,
            required: true,
            unique: true
        },
        telefono:{
            type: Number
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        condicion:{
            type: String,
            required: true

        }
    },
    {
        timestamps: true
    }
    )

module.exports = mongoose.model('clientes', ClienteSchema);
