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
    let db = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8'));
    res.json(db);
    const newDb = db.filter(note => note.id !== req.params.id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(newDb));
    res.json(newDb);
});
router.delete('/notes/:id', function (req, res) {
    let newNotes = [];
    for (let i = 0; i < notesDB.length; i++) {
        if (notesDB[i].id !== req.params.id) {
            newNotes.push(notesDB[i]);
        }
    }

notesDB=newNotes;
fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDB));
res.json(notesDB);
});

module.exports = router;