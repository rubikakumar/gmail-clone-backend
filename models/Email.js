const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  to: { type: String, required: true },
  from: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  folder: { type: String, enum: ['inbox', 'sent', 'trash'], default: 'inbox' },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Email', EmailSchema);
