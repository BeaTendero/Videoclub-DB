const models = require('../models/index')

const clienteController = {}

clienteController.getClientes = (req, res) => {
    models.cliente.findAll()
        .then((resp) => {
            res.send(resp)
        })
}

clienteController.getPedidosById = async (req, res) => {
    try {
        let resp = await models.cliente.findAll()
        res.send(resp)
    } catch (err) {
        res.send(err)
    }

}

module.exports = clienteController