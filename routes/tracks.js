const express = require ('express');
const { getItems, getItem, createItem } = require('../controllers/tracks');
const router = express.Router();


//CRUD
//Vamop a generar http://localhost/tracks
router.get("/", getItems);

router.post("/", createItem);

    


module.exports = router
