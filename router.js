const express = require('express');
const router = express.Router()

const clientesRoutes = require('./views/clientesRoutes')

router.use('/clientes', clientesRoutes)

module.exports = router