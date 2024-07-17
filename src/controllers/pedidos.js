const { pedidosModels } = require('../models/');
const validator = require('validator')
const Pedido = require('../models/Pedidos')

module.exports = {

    crearPedido: (req,res)=>{
        let parametros = req.body

        let pedido = new Pedido(parametros);

        pedido.save()
    
    },

    verPedidos: (req,res) =>{
        let pedidos = Pedido.find();
        return res.status(200).send(pedidos)
},

    verPedido: () =>{},

    modificarPedido: () =>{},

    eliminarPedido: () =>{}

}
