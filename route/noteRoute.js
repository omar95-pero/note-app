const { request } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const noteCtrl = require('../controller/noteController');

const router = express.Router();
router.get("/notes",noteCtrl.getAllNotes);
router.get("/save-note",noteCtrl.saveNote);

module.exports = router;