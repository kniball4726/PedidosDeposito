const express = require('express')
const cors = require('cors')
const app = express();
const config = require('../config/config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine','ejs')

app.use('/api',require('../src/routes/pedidos'))
//app.use('/api',require('../src/routes/users'))

app.use('/home', (req,res)=>{
    res.render('pages/index')
})
app.use('/about', (req,res)=>{
    res.render('pages/about')
})
app.use('/contact', (req,res)=>{
    res.render('pages/contact')
})
app.use('/pedidos', (req,res)=>{
    res.render('pages/pedidos')
})

app.use('*', (req,res)=>{
        res.render('pages/404')
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