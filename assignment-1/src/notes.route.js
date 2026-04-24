const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const noteRoutes  = require('./routes/note.routes');
app.use('/api/notes', noteRoutes);

module.exports = app;