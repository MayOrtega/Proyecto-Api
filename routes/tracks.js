const express = require ('express');
const router = express.Router();

//CRUD
// crearemos una ruta con el método get
router.get("/", (req, res) => {

    const data = ["hola", "mundo"]

    res.send({data})
})

module.exports = router
