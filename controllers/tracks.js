const { tracksModel } = require('../models')
/**Obtener lista de datos de la db!
*@param {*} req
*@param {*} res
*/
const getItems = async(req, res) => {
    const data = await tracksModel.find({}) //Buscar todo

    res.send({data})
}


/**Obtener un detalle!
*@param {*} req
*@param {*} res
*/
const getItem = (req, res) => {}

/**Insertar un registro!
*@param {*} req
*@param {*} res
*/
const createItem = async (req, res) => {
    //Podría hacerse una promesa así:
    //tracksModel.find({}).then((res)=> {console.log(res)})
     const { body } = req
     const data = await tracksModel.create(body)
     console.log(body)
     res.send({data})
}

/**Actualizar un registro!
*@param {*} req
*@param {*} res
*/
const updateItems = (req, res) => {}



/**Eliminar un registro!
*@param {*} req
*@param {*} res
*/
const deleteItems = (req, res) => {}

//desectructuramos y exportamos
module.exports = {getItem, getItems, createItem, updateItems, deleteItems}