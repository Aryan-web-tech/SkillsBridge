import { Job_Request_Model } from "../models/JobRequest.model.js";
import { Service_Provider_Model } from "../models/Service_Provider.model.js";
import { Job_Quote_Model } from "../models/JobQuote.model.js";


export const getNearbyJobRequests = async (req, res) => {
  try {
    const providerId = req.params.providerId;

    // Get provider's data
    const provider = await Service_Provider_Model.findById(providerId);
    if (!provider) {
      return res.status(404).json({ message: "Service provider not found" });
    }

    const { coordinates } = provider.business_coordinates;
    const businessType = provider.business_type;

    // Find job requests within 3km and matching category
    const nearbyJobs = await Job_Request_Model.find({
      job_category: businessType,
      job_coordinates: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: coordinates
          },
          $maxDistance: 3000
        }
      }
    });

    res.status(200).json(nearbyJobs);
  } catch (error) {
    console.error("Error finding nearby jobs:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const submitJobQuote = async (req, res) => {
  try {
    const { providerId, jobId, quoteAmount, message } = req.body;

    const provider = await Service_Provider_Model.findById(providerId);
    const job = await Job_Request_Model.findById(jobId);
    if (!provider || !job) {
      return res.status(404).json({ message: "Invalid provider or job ID" });
    }

    const quote = new Job_Quote_Model({
      jobId: job._id,              
      providerId: provider._id,    
      quoteAmount,                 
      message,
      seeker_id: job.seeker_id,    
      seeker_name: job.seeker_name
    });

    await quote.save();
    res.status(201).json({ message: "Quote submitted successfully", quote });
  } catch (error) {
    console.error("Error submitting quote:", error);
    res.status(500).json({ message: "Server error" });
  }
};


