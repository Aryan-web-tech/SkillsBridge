import { Router } from "express";
import { getNearbyJobRequests, submitJobQuote } from "../controllers/providerController.js";
import { verifyToken } from "../middleware/auth.Middleware.js";
export const providerRouter = Router();

// Provider fetches nearby jobs matching their category
providerRouter.get('/nearby-jobs/:providerId', verifyToken, getNearbyJobRequests);

// Provider submits a quote for a jobRequest
providerRouter.post('/submit-quote', verifyToken, submitJobQuote);



