import { Job_Request_Model } from '../models/JobRequest.model.js';
import { Service_Seeker_Model } from '../models/Service_Seeker.model.js';
import { Service_Provider_Model } from '../models/Service_Provider.model.js';

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

    res.status(201).json({
      message: 'Job request created and providers notified',
      job: newJob,
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
