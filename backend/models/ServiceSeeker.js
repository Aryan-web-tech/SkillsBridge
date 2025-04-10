const mongoose = require('mongoose');

const ServiceSeekerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: Number, required: true },
  location: { type: String },
  password: { type: String, required: true } // Add this line
}); 

module.exports = mongoose.model('ServiceSeeker', ServiceSeekerSchema);
