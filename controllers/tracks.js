
/**Obtener lista de datos de la db!
*@param {*} req
*@param {*} res
*/
const getItems = (req, res) => {
    const data = ["hola", "mundo"]

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
const createItems = (req, res) => {}


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
module.exports = {getItem, getItems, createItems, updateItems, deleteItems}