const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  age: Number,
  address: String
});

module.exports = mongoose.model('Patient', patientSchema);
