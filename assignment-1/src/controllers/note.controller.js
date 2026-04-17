const Note = require('../models/note.model');

// CREATE ONE
const createNote = async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// CREATE BULK
const createBulkNotes = async (req, res) => {
    try {
        const notes = await Note.insertMany(req.body.notes || []);
        res.status(201).json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ALL
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET ONE
const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: 'Not found' });

        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// REPLACE (PUT)
const replaceNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            overwrite: true,
        });

        if (!note) return res.status(404).json({ message: 'Not found' });

        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE (PATCH)
const updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if (!note) return res.status(404).json({ message: 'Not found' });

        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE ONE
const deleteNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        if (!note) return res.status(404).json({ message: 'Not found' });

        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// DELETE BULK
const deleteBulkNotes = async (req, res) => {
    try {
        const result = await Note.deleteMany({
            _id: { $in: req.body.ids || [] },
        });

        res.json({ deleted: result.deletedCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createNote,
    createBulkNotes,
    getAllNotes,
    getNoteById,
    replaceNote,
    updateNote,
    deleteNote,
    deleteBulkNotes,
};