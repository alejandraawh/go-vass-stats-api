const mongoose = require("mongoose");
const statSchema= new mongoose.Schema({
    ubicationUser:{
        type:String,
        required:true
    },
    urlClick:{
        type:String,
        required:true
    },
    frequentPackages:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Stats', statSchema);