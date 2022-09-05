const multer = require("multer");
const express = require("express");
const router = express.Router();
//TODO http://localhost:3001/api/storage


const storage = multer.diskStorage({
    //donde guardaremos los archivos
  destination: function(req, file, cb){
   const pathStorage = `${__dirname}/../storage.js`
   cb(null, pathStorage)  
},
  filename: function(req, file, cb){
//TODO mi-cv.pfd mi-foto.png
const ext = file.originalname.split(".").pop() //devuelve ["name", "png"] y con pop tomamos el último valor (extensión)

//con la extensión obtenida anteriormente le damos el prefijo "file"
//y con date now extraemos la marca de tiempo actual en unix número entero aleatorio
const filename =   `file-${Date.now}.${ext}` //Devuelve file-343432443423.mp3
}  
})




router.post("/", (req, res) => {
    res.send({a:1})
})

module.exports = router;
