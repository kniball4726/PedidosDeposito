const { pedidosModels } = require('../models/');
const validator = require('validator')
const Pedido = require('../models/Pedidos')

module.exports = {

    crearPedido: (req,res)=>{
        
        let parametros = req.body

        let pedido = new Pedido(parametros);

        let guardar = pedido.save()

        if(!guardar){
                res.status(500).send({message: 'Error al crear el pedido'})
            }else{
                res.status(200).send({
                    message: 'Pedido creado correctamente',
                    pedido: pedido
                })
            }   
    
    },

    verPedidos: async(req,res) =>{
        
        let consulta = await Pedido.find({})
            if(!consulta){
                    res.status(500).send({message: 'Error al consultar los pedidos'})
                }else{
                    res.status(200).send({message: 'Pedidos consultados correctamente', consulta})
            }
}, 

    verPedido: () =>{},

    modificarPedido: () =>{},

    eliminarPedido: () =>{}

}
