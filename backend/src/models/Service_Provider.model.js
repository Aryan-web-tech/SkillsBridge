import mongoose from 'mongoose';

const serviceProviderSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true, required: true },
  number: { type: String},
  experience: {type:String},
  password: { type: String, required: true},
  business_address: String,
  business_type: String,
  business_name: String,
  business_coordinates: {
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
}, { collection: 'Service_Provider' });

serviceProviderSchema.index({ business_coordinates: '2dsphere' });

export const Service_Provider_Model = mongoose.model('Service_Provider', serviceProviderSchema);


