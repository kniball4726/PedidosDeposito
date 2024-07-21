const validator = require('validator')
const User = require('../models/Users')

const validacion = (parametros)=>{

        let validarUser = !validator.isEmpty(parametros.user)
        
        let validarPassword = !validator.isEmpty(parametros.password) &&
        validator.isLength(parametros.password, {min: 6, max: 20})
        
        let validarEmail = !validator.isEmpty(parametros.email) &&
        validator.isEmail(parametros.email)


        if(!validarUser || !validarPassword || !validarEmail){
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
        
        let user = new User(parametros);

        let guardar = user.save()

        if(!guardar){
                res.status(500).send({
                    message: 'Error al crear usuario'
                })
            }else{
                res.status(200).send({
                    message: 'Usuario creado correctamente',
                    usuario: user
                })
            }   
    
    },

    readAll: async(req,res) =>{
        
        let consulta = await User.find({})
                                 .sort({fecha: -1})

                                
            if(!consulta){
                    res.status(500).send({
                        message: 'Error al consultar usuario'})
                }else{
                    res.status(200).send({
                        message: 'Usuarios consultados correctamente',
                        cantidad: consulta.length,
                        pedidos: consulta})
            }
}, 

    readOne: async(req,res) =>{
        
        let {email} = req.params
        
        let usuario = await User.findOne({email})

            if(!usuario){
                   return res.status(500).send({
                    message: 'Error al consultar usuario'})
                }else{
                    return res.status(200).send({
                        message: 'Usuario consultado correctamente', 
                        Usuario: usuario})
                    }
                
        },


    updateOne: async(req,res) =>{
        
        let {email} = req.params
        
        let parametros = req.body

        try {
            validacion(res, parametros)
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                mensaje: 'Faltan datos por enviar'
            })            
        }

        let usuario = await User.findOneAndUpdate({email}, parametros,{new: true})
         
        if(!usuario){
                return res.status(500).send({
                    status: 500,
                    message: 'Error al actualizar el usuario'})
                }else{
                    return res.status(200).send({
                        message: 'Usuario actualizado correctamente',
                        usuario: usuario})
                        }
                        
                
        },



    deleteOne: async(req,res) =>{
        
        let {user} = req.params
        
        let usuario = await User.findOneAndDelete({user})

            if(!usuario){
                   return res.status(500).send({
                    message: 'Error al eliminar el usuario',
                    status: 500
                })
                }else{
                    return res.status(200).send({
                        message: 'Usuario eliminado correctamente', 
                        status: 200,
                        consulta: pedido})
                    }
                
        },



}
