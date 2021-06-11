const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  id: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model('Customer', CustomerSchema);
