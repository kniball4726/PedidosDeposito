const express = require('express')
const router = express.Router();
const controllers = require('../controllers/pedidos')

router.get('/', controllers.crearPedido);

module.exports = router;