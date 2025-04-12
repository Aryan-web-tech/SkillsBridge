import mongoose from 'mongoose';

const serviceSeekerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
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
