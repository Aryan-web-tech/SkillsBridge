import mongoose from 'mongoose';

const jobRequestSchema = new mongoose.Schema({
  seeker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Seeker',
    required: true
  },
  seeker_name: String,
  job_category: String,
  job_description: String,
  job_location: String,
  job_coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  notified_providers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service_Provider'
    }
  ]
}, { collection: 'Job_Requests' });

jobRequestSchema.index({ job_coordinates: '2dsphere' });

export const Job_Request_Model = mongoose.model('Job_Requests', jobRequestSchema);
