import mongoose from 'mongoose';

const serviceProviderSchema = new mongoose.Schema({
  business_address: String,
  business_type: String,
  business_name: String,
  email: String,
  fullName: String,
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


