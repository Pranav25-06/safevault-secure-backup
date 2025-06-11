const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  originalName: String,
  storedName: String,
  version: Number,
  uploadDate: { type: Date, default: Date.now },
  checksum: String
});

module.exports = mongoose.model('File', fileSchema);
