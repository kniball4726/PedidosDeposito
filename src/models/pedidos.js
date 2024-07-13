const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema(
    {
        fecha: {
            type: Date.now,
            required: true,
            },
        remito:{
            type: Number,
            required: true,
            unique: true
        },
        cliente:{
            type: String,
            required: true
        },
        direccion:{
            type: String,
        },
        pedido:{
            type: Number,
            required: true
        },
        bultos:{
            type: Number,
            required: true
        },
        operario:{
            type: String,
            required: true
        },
        descuento:{
            type: Date.now,
            required: true
        },
        entregado:{
            type: Date,
        },
        nota:{
            type: String,
        },
        factura:{
            type: String
        }
    },
    {
        timestamps: true
    }
    )

module.exports = mongoose.model('pedidos', PedidoSchema);
        