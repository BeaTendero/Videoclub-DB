const cliente = require('./clientes');
const Orders = require('./orders');
const Peli = require('./pelis');
const serie = require('./series');

//Relation 1 to N Users => Orders

cliente.hasMany(Orders, {foreignKey: "cliente"});
Orders.belongsTo(Users, {foreignKey: "cliente"});

//Relation 1 to N Orders => Peli

pelis.hasMany(Orders, {foreignKey: "peli"});
Orders.belongsTo(Peli, {foreignKey: "peli"});

//Relation 1 to N Orders => Series

serie.hasMany(Orders, {foreignKey: "serie"});
Orders.belongsTo(serie, {foreignKey: "serie"});