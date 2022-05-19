const { request } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const noteCtrl = require('../controller/noteController');

const router = express.Router();
router.get("/notes",noteCtrl.getAllNotes);
router.post("/save-note",noteCtrl.saveNote);
router.put("/update-note",noteCtrl.updateNote);
router.delete("/delete/:noteId",noteCtrl.deleteNote);

module.exports = router;