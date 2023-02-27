const router = require('express').Router();
const path = require('path');
const fs = require('fs');
let notesDB = require('../db/db.json');

const bodyParser = require('body-parser');
router.use(bodyParser.json());

const uuid = require('uuid');

router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', function (req, res) {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random(),
    };
    newNotes.push (newNote);
    fs.writeFileSync('../db/db.json'), JSON.stringify(newNotes);
    res.json(newNotes);
});
router.delete('/notes/:id', function (req, res) {
    let newNotes = [];
    for (let i = 0; i < notesDB.length; i++) {
        if (notesDB[i].id !== req.params.id) {
            newNotes.push(notesDB[i]);
        }
    }

notesDB=newNotes;
fs.writeFileSync('../db/db.json'), JSON.stringify(notesDB);
res.json(notesDB);
});

module.exports = router;