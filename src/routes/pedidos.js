const express = require('express')
const router = express.Router();
const controllers = require('../controllers/pedidos')


router.get('/pedidos', controllers.verPedidos);
router.get('/pedidos/:id', controllers.verPedido);
router.post('/pedidos', controllers.crearPedido)
router.put('/pedidos/:id', controllers.modificarPedido)
router.delete('/pedidos/:id', controllers.eliminarPedido)

module.exports = router;