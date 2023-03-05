const fs = require('fs');

let notesdb = require('../db/db.json');

var uuid = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {

        let data = fs.readFileSync('../db/db.json', 'utf8');
        
        notesdb = JSON.parse(data);
        
        res.json(notesdb);

    });

    app.post('/api/notes', (req, res) => {

        const newNote = {
            ...req.body,
            id: uuid.v4()
        };

        let data = fs.readFileSync('../db/db.json', 'utf8');

        notesdb = JSON.parse(data);

        notesdb.push(newNote);

        fs.writeFileSync('../db/db.json', JSON.stringify(notesdb));

        res.json(notesdb);

    });

    app.delete('/api/notes/:id', (req, res) => {

        let data = fs.readFileSync('../db/db.json', 'utf8');

        notesdb = JSON.parse(data);

        notesdb = notesdb.filter(note => note.id !== req.params.id);

        fs.writeFileSync('../db/db.json', JSON.stringify(notesdb));

        res.json(notesdb);

    });

};