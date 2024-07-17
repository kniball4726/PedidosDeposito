const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema(
    {
        fecha: {
            type: Date,
            default: Date.now
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
            type: String
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
            type: Date,
            default: Date.now
        },
        entregado:{
            type: Date,
            default: Date.now
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

module.exports = mongoose.model('Pedido', PedidoSchema, 'pedidos');
        