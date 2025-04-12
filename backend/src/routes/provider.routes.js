import { Router } from "express";
import { getNearbyJobRequests, submitJobQuote } from "../controllers/providerController.js";

export const providerRouter = Router();

// Provider fetches nearby jobs matching their category
providerRouter.get('/nearby-jobs/:providerId', getNearbyJobRequests);

// Provider submits a quote for a jobRequest
providerRouter.post('/submit-quote', submitJobQuote);




// providerRouter.post("/job/:jobId/quote", submitJobQuote);
