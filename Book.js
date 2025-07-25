
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  completed: Boolean,
  notes: String
});

module.exports = mongoose.model('Book', bookSchema);
