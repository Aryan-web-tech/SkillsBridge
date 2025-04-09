const mongoose = require('mongoose');

const ServiceSeekerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  need: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String },
});

module.exports = mongoose.model('ServiceSeeker', ServiceSeekerSchema);
