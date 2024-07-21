const { pedidosModels } = require('../models/');
const validator = require('validator')
const Pedido = require('../models/Pedidos')

module.exports = {

    createOne: (req,res)=>{
        
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

    readAll: async(req,res) =>{
        
        let consulta = await Pedido.find({})
                                   .sort({fecha: -1})

                                
            if(!consulta){
                    res.status(500).send({message: 'Error al consultar los pedidos'})
                }else{
                    res.status(200).send({
                        message: 'Pedidos consultados correctamente',
                        cantidad: consulta.length,
                        pedidos: consulta})
            }
}, 

    readOne: async(req,res) =>{
        
        let {remito} = req.params
        
        let pedido = await Pedido.findOne({remito})

            if(!pedido){
                   return res.status(500).send({message: 'Error al consultar el pedido'})
                }else{
                    return res.status(200).send({
                        message: 'Pedido consultado correctamente', 
                        consulta: pedido})
                    }
                
        },


    updateOne: async(req,res) =>{
        
        let {remito} = req.params
        
        let guardar = req.body


        let pedido = await Pedido.findOneAndUpdate({remito}, guardar,{new: true})
         
        if(!pedido){
                return res.status(500).send({
                    status: 500,
                    message: 'Error al actualizar el pedido'})
                }else{
                    return res.status(200).send({
                        message: 'Pedido actualizado correctamente',
                        consulta: pedido})
                        }
                        
                
        },



    deleteOne: async(req,res) =>{
        
        let {remito} = req.params
        
        let pedido = await Pedido.findOneAndDelete({remito})

            if(!pedido){
                   return res.status(500).send({
                    message: 'Error al eliminar el pedido',
                    status: 500
                })
                }else{
                    return res.status(200).send({
                        message: 'Pedido eliminado correctamente', 
                        status: 200,
                        consulta: pedido})
                    }
                
        },



}
