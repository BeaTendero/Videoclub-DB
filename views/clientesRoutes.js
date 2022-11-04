const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clientesController')

router.get('/', clienteController.getClientes)
router.get('/getpedidoid/:id', clienteController.getPedidosById)

module.exports = router