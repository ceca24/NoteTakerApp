const router = require('express').Router();
const fs = require('fs');
let notesdb = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

router.post('/notes', (req, res) => {
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random(),
    };

    notesdb.push (newNote);
    fs.writeFileSync('../db/db.json'), JSON.stringify(newNotes);
    res.json(newNotes);
});

router.delete('/notes/:id', (req, res) => {
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