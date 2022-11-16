const models = require('../models/index')

const clienteController = {}

clienteController.getClientes = async (req, res) => {
    models.cliente.findAll()
        .then(resp => {
            res.send(resp)
        })

    console.log("adios");

}

clienteController.getPedidosById = async (req, res) => {
    try {
        let resp = await models.cliente.findAll()
        console.log("adios");

        res.send(resp)

    } catch (err) {
        res.send(err)
    }

}

module.exports = clienteController