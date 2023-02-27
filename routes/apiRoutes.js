const router = require('express').Router();
const fs = require('fs');
let notesdb = require('../db/db.json');

router.get('/notes', function (_req, res) {
    notesdb = JSON.parse(fs.readFileSync('../db/db.json'));
    res.json(notesdb);
});

router.post('/notes', function (req, res) {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random(),
    };

    notesdb.push (newNote);
    fs.writeFileSync('../db/db.json'), JSON.stringify(newNotes);
    res.json(newNotes);
});

router.delete('/notes/:id', function (req, res) {
    let newNotes = [];
    for (var i = 0; i < notesdb.length; i++) {
        if (notesdb[i].id !== req.params.id) {
            newNotes.push(notesdb[i]);
        }
    }

notesdb=newNotes;
fs.writeFileSync('../db/db.json'), JSON.stringify(notesdb);
res.json(notesdb);
});

module.exports = router;