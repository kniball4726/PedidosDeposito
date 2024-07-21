const validator = require('validator')
const Pedido = require('../models/Pedidos')

const validacion = (parametros)=>{

        let validarRemito = !validator.isEmpty(parametros.remito) &&
        validator.isNumeric(parametros.remito) &&
        validator.isLength(parametros.remito, {min: 4, max: undefined})
        
        let validarCliente = !validator.isEmpty(parametros.cliente)
        
        let validarPedido = !validator.isEmpty(parametros.pedido) &&
        validator.isNumeric(parametros.pedido)

        let validarBultos = !validator.isEmpty(parametros.bultos) &&
        validator.isNumeric(parametros.bultos)

        let validarOperario = !validator.isEmpty(parametros.operario)

        if(!validarRemito || !validarCliente || !validarPedido || !validarBultos || !validarOperario){
            throw new Error('No se ha validado los tipos de datos, favor revisar')
        }

}

module.exports = {

    createOne: (req,res)=>{
        
        let parametros = req.body

        try {
            validacion(parametros)
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                mensaje: 'Faltan datos por enviar'
            })            
        }
        
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
        
        let parametros = req.body

        try {
            validacion(res, parametros)
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                mensaje: 'Faltan datos por enviar'
            })            
        }

        let pedido = await Pedido.findOneAndUpdate({remito}, parametros,{new: true})
         
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
