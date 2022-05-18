const generator = require("../Util/generator");


exports.getAllNotes = (req,res)=>{
    let new_1 = generator.generate();
res.send("Get All Notes From Controller"+new_1);
}

exports.saveNote = (req,res)=>{
    res.send("Save Note Function Success ........");
    }