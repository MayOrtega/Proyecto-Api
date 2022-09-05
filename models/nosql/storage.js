const mongoose = require("mongoose");

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        },
        
    }
)

module.exports = mongoose.model("storage", StorageScheme)