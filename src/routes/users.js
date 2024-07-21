const express = require('express')
const router = express.Router();
const controllers = require('../controllers/users')


router.get('/users/', controllers.readAll);
router.get('/users/:email', controllers.readOne);
router.post('/users', controllers.createOne);
router.put('/users/:email', controllers.updateOne);
router.delete('/users/:email', controllers.deleteOne);

module.exports = router;