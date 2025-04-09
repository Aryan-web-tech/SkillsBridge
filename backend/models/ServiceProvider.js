const mongoose = require('mongoose');

const ServiceProviderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: Email, required: true },
    number: { type: Number, required: true },
    location: { type: String ,required: true},
    servicecategory:{type:String,required: true},
    speciality:{type:String},
    experience:{type:Number,required:true},
    docs:{type:Array,required:true}

});

module.exports = mongoose.model('ServiceProvider', ServiceProviderSchema);
