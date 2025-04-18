const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
    name: { type: String,},
    email: { type: String, unique: true },
    number: { type: String},
    serviceCategory:{type:String,required: true},
    speciality:{type:String},
    experience:{type:String,required:true},
    password: { type: String, required: true } // Add this line

});

module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);
