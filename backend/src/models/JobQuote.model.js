import mongoose from 'mongoose';

const jobQuoteSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobRequest',
    required: true
  },
  providerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Provider',
    required: true
  },
  quoteAmount: {
    type: Number,
    required: true
  },
  seeker_id: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service_Seeker',
    required: true
  },
  seeker_name: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { collection: 'Job_Quotes' });

export const Job_Quote_Model = mongoose.model('Job_Quotes', jobQuoteSchema);
