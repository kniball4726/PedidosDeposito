const mongoose = require('mongoose')
const config = require('../config/config')
const DB_URI = config.DB_URI;

const dbConnect = async()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log();
        console.log('**** Conectado a base de datos ****')
    } catch (error) {
        console.log();
        console.log('No se pudo conectar a la base de datos: '+error);
        
    }
}

module.exports = dbConnect;