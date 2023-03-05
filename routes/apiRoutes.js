const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
        });
    });
    
    app.post("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuid.v4();
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
            if (err) throw err;
            res.json(notes);
        });
        });
    });
    
    app.delete("/api/notes/:id", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        const notes = JSON.parse(data);
        const noteId = req.params.id;
        const newNotes = notes.filter((note) => note.id !== noteId);
        fs.writeFile("./db/db.json", JSON.stringify(newNotes), function (err) {
            if (err) throw err;
            res.json(newNotes);
        });
        });
    });
    };