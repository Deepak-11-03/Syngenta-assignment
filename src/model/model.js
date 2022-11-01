const mongoose = require("mongoose");

const organisation = new mongoose.Schema({

    organisation: {
        type: String,
        required: true,
        trim: true
    },
    region:{
        type:String,
        required:true
    },
    crop:
        {
            _id:false,
            cropName:{
                type:String,
                required:true
            },
            cropCycle:{
                type:String,
                required:true
            }
        }
    

});

module.exports = mongoose.model("Organisation", organisation);