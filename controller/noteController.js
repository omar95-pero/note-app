const generator = require("../Util/generator");
const memStrg = require("../Util/memory.storage");


exports.getAllNotes = (req,res)=>{
    let new_1 = generator.generate();
    let value_1 = memStrg.store.setItem(new_1,'item_1');
    let new_2 = generator.generate();
    let value_2 = memStrg.store.setItem(new_2,'item_2');
    let keys = memStrg.getKeys(memStrg.store);
    let values = memStrg.getValues(memStrg.store);
res.send("all values ........"+JSON.stringify(keys));
console.log(JSON.stringify(values));
}

exports.saveNote = (req,res)=>{
    res.send("Save Note Function Success ........");
    }