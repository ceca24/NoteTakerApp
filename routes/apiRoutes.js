const fs = require('fs');

let notesdb = require('../db/db.json');

const router = require('express').Router();

app.get('/api/notes', (req, res) => {

        notesdb = JSON.parse(fs.readFileSync('./db/db.json'));
        req.body,
        res.json(notesdb);
    });

    app.post('/api/notes', (req, res) => {

        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: Math.random(),
        };

        notesdb.push(newNote);

        fs.writeFileSync('./db/db.json', JSON.stringify(notesdb));

        res.json(notesdb);

    });

    app.delete('/notes/:id', (req, res) => {

        let updateNote = [];

        for (var i = 0; i < notesdb.length; i++) {
            if (notesdb[i].id != req.params.id) {
                updateNote.push(notesdb[i]);
            }
        }
        notesdb=updateNote;

        fs.writeFileSync('./db/db.json', JSON.stringify(notesdb));

        res.json(notesdb);

    });

module.exports = router;