const express = require('express')
const cors = require('cors')
const app = express();
const config = require('../config/config')
const rutas = require('../src/routes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine','ejs')

app.use('/api',rutas)

app.use('/', (req,res)=>{
    res.render('index')
})

const PORT = config.PORT

const server = async()=>{
    try {
        await app.listen(PORT, ()=>{
            console.log();
            console.log(`Servidor corriendo por  https://localhost:${PORT}`)
        })    
    } catch (error) {
        console.log();
        console.log('Error al intentar correr servidor: '+error)
        
    }
    
}

module.exports = server;