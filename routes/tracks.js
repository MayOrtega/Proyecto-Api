const express = require ('express');
const { getItems, getItem } = require('../controllers/tracks');
const router = express.Router();


//CRUD
//Vamop a generar http://localhost/tracks
router.get("/", getItems);

router.get("/:id", getItem)

    


module.exports = router
