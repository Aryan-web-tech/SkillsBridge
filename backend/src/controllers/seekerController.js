import { Job_Request_Model } from '../models/JobRequest.model.js';
import { Service_Seeker_Model } from '../models/Service_Seeker.model.js';
import { Service_Provider_Model } from '../models/Service_Provider.model.js';
import { Job_Quote_Model } from '../models/JobQuote.model.js';

// POST /create-job
export const createJobRequest = async (req, res) => {
  try {
    const { seekerId, job_category, job_description, job_location } = req.body;

    const seeker = await Service_Seeker_Model.findById(seekerId);
    if (!seeker) {
      return res.status(404).json({ message: 'Seeker not found' });
    }

    const seekerCoordinates = seeker.home_coordinates.coordinates;

    const newJob = new Job_Request_Model({
      seeker_id: seeker._id,
      seeker_name: seeker.fullName,
      job_category,
      job_description,
      job_location,
      job_coordinates: {
        type: 'Point',
        coordinates: seekerCoordinates,
      }
    });

    await newJob.save();

    const nearbyProviders = await Service_Provider_Model.find({
      business_type: job_category,
      business_coordinates: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: seekerCoordinates
          },
          $maxDistance: 3000
        }
      }
    });

    const notifiedProviderIds = nearbyProviders.map(provider => provider._id);

    await Job_Request_Model.findByIdAndUpdate(newJob._id, {
      $set: { notified_providers: notifiedProviderIds }
    });

    // ✅ Only include relevant job fields
    const jobResponse = {
      seeker_id: newJob.seeker_id,
      seeker_name: newJob.seeker_name,
      job_category: newJob.job_category,
      job_description: newJob.job_description,
      job_location: newJob.job_location,
      job_coordinates: newJob.job_coordinates
    };

    res.status(201).json({
      message: 'Job request created and providers notified',
      job: jobResponse,
      notifiedProviders: nearbyProviders.map(p => ({
        id: p._id,
        name: p.fullName,
        email: p.email
      }))
    });
  } catch (error) {
    console.error('Error creating job request:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getQuotesForJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    // Find all quotes for the given job
    const quotes = await Job_Quote_Model.find({ jobId }).populate('providerId', 'fullName email');

    if (!quotes || quotes.length === 0) {
      return res.status(404).json({ message: "No quotes found for this job" });
    }

    res.status(200).json({ jobId, totalQuotes: quotes.length, quotes });
  } catch (error) {
    console.error("Error fetching quotes for job:", error);
    res.status(500).json({ message: "Server error" });
  }
};
