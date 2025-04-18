import { Router } from "express";
import { createJobRequest, getQuotesForJob } from "../controllers/seekerController.js";
import { verifyToken } from "../middleware/auth.Middleware.js";
export const seekerRouter = Router();

// Seeker creates a job request
seekerRouter.post("/create-job", verifyToken, createJobRequest);

// Seeker fetches all quotes for a job
seekerRouter.get("/jobs/:jobId/quotes", verifyToken, getQuotesForJob);
