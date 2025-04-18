import mongoose from 'mongoose';

const serviceSeekerSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true, required: true },
  number: { type: String},
  password: { type: String, required: true }, // Add this line
  home_address: String,
  home_coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
}, { collection: 'Service_Seeker' });

export const Service_Seeker_Model = mongoose.model('Service_Seeker', serviceSeekerSchema);
