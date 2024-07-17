const mongoose = require('mongoose')
const config = require('../config/config')
const DB_URI = config.DB_URI;
const colors = require('colors')
const dbConnect = async()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log();
        console.log('**** Conectado a base de datos ****'.bold.bgGreen)
    } catch (error) {
        console.log();
        console.log(`No se pudo conectar a la base de datos: ${error} `.bold.bgRed);
        
    }
}

module.exports = dbConnect;