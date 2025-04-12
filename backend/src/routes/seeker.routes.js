import { Router } from "express";
import {
  createJobRequest,
  // getQuotesForJob
} from "../controllers/seekerController.js";

export const seekerRouter = Router();

// Seeker creates a job request
seekerRouter.post("/create-job", createJobRequest);

// Seeker fetches all quotes for a job
// seekerRouter.get("/job/:jobId/quotes", getQuotesForJob);
