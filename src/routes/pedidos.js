const express = require('express')
const router = express.Router();
const controllers = require('../controllers/pedidos')


router.get('/pedidos/', controllers.readAll);
router.get('/pedidos/:remito', controllers.readOne);
router.post('/pedidos', controllers.createOne);
router.put('/pedidos/:remito', controllers.updateOne);
router.delete('/pedidos/:remito', controllers.deleteOne);

module.exports = router;