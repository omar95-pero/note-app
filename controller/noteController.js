const generator = require("../Util/generator");
const memStrg = require("../Util/memory.storage");
const model = require("../model/note.model");
const { json } = require("express/lib/response");


exports.getAllNotes = (req,res)=>{
//     let new_1 = generator.generate();
//     let value_1 = memStrg.store.setItem(new_1,'item_1');
//     let new_2 = generator.generate();
//     let value_2 = memStrg.store.setItem(new_2,'item_2');
//     let keys = memStrg.getKeys(memStrg.store);
//     let noteObj = new model.Note('001','pero','pero is very tired','omar',new Date())
// res.send("all values ........"+JSON.stringify(noteObj));
// console.log(JSON.stringify(values));
    let values = memStrg.getValues(memStrg.store);
  return  res.status(200).send(JSON.stringify(values))
}

exports.saveNote = (req,res)=>{
    let seqId = generator.generate();
    let title = req.body.title;
    let content = req.body.content;
    let createdOn = new Date();
    let createdBy  = 'omar pero';
    if (!title || !content) {
       return  res.status(500).send({error:'title and content shouldnot be empty'});
    }
    let noteObj = new model.Note(seqId,title,content,createdBy,createdOn);
     let setData = memStrg.store.setItem(seqId,noteObj);
     let getData = memStrg.getValues(memStrg.store)
     return res.status(201).send("Created Successfully..........");
    }




     exports.updateNote = (req,res)=>{
        let seqId = req.body.seqId;
        let title = req.body.title;
        let content = req.body.content; 
        let createdOn = new Date();
        let createdBy  = 'omar pero';
        if (!title) {
           return  res.status(500).send({error:'title shouldnot be empty'});
        }
        if (!content) {
            return  res.status(500).send({error:'content shouldnot be empty'});
         }
         let Item = memStrg.store.getItem(seqId)
         if (!Item) {
            return  res.status(500).send({error:'NoteId Not Exist...'});
         }
         let noteObj = new model.Note(seqId,title,content,createdBy,createdOn);
         let setData = memStrg.store.setItem(seqId,noteObj);
         return res.status(202).send("Updated Note Successfully..........");
    }


    exports.deleteNote = (req,res)=>{
       let note = req.params.noteId;
       let Item = memStrg.store.getItem(note)
       if (!Item) {
          return  res.status(500).send({error:'NoteId Not Exist...'});
       }
    //    let keys = memStrg.getKeys(memStrg.store)
    //    return  res.status(200).send(keys);

        let removed = memStrg.store.removeItem(note);
        return  res.status(200).send('Deleted Success.....');

        }