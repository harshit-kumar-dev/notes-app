const express = require('express');
const app = express();

app.use(express.json());

const noteRoutes  = require('./routes/note.routes');
app.use('/api/notes', noteRoutes);

app.get('/api/notes', (req, res) => {
  res.send("Notes working ✅");
});

module.exports = app;