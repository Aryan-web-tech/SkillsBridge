/**
 * @swagger
 * /api/seeker/create-job:
 *   post:
 *     summary: Create a new job request and fetch nearby providers
 *     tags: [Seeker]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - seekerId
 *               - job_category
 *               - job_description
 *               - job_location
 *             properties:
 *               seekerId:
 *                 type: string
 *                 example: "661f99f227a5f74134d028a5"
 *               job_category:
 *                 type: string
 *                 example: "Plumber"
 *               job_description:
 *                 type: string
 *                 example: "Leaking tap in the kitchen"
 *               job_location:
 *                 type: string
 *                 example: "Baner, Pune"
 *     responses:
 *       201:
 *         description: Job created and providers notified
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Job request created and providers notified
 *                 job:
 *                   type: object
 *                   properties:
 *                     seeker_id:
 *                       type: string
 *                       example: "661f99f227a5f74134d028a5"
 *                     seeker_name:
 *                       type: string
 *                       example: "Jane Smith"
 *                     job_category:
 *                       type: string
 *                       example: "Plumber"
 *                     job_description:
 *                       type: string
 *                       example: "Leaking tap in the kitchen"
 *                     job_location:
 *                       type: string
 *                       example: "Baner, Pune"
 *                     job_coordinates:
 *                       type: object
 *                       properties:
 *                         type:
 *                           type: string
 *                           example: "Point"
 *                         coordinates:
 *                           type: array
 *                           items:
 *                             type: number
 *                           example: [73.7805, 18.559]
 *                 notifiedProviders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "662000f5a8c2b2d5b8e0ff6a"
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "john@example.com"
 *       404:
 *         description: Seeker not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/seeker/jobs/{jobId}/quotes:
 *   get:
 *     summary: Get all quotes for a specific job
 *     tags: [Seeker]
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the job to fetch quotes for
 *     responses:
 *       200:
 *         description: List of quotes for the job
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobId:
 *                   type: string
 *                   example: "661f9bb227a5f74134d02b1c"
 *                 totalQuotes:
 *                   type: integer
 *                   example: 2
 *                 quotes:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "661fa1c227a5f74134d02c3d"
 *                       quoteAmount:
 *                         type: number
 *                         example: 1500
 *                       description:
 *                         type: string
 *                         example: "We can fix the leak within a day"
 *                       providerId:
 *                         type: object
 *                         properties:
 *                           fullName:
 *                             type: string
 *                             example: "John Doe"
 *                           email:
 *                             type: string
 *                             example: "john@example.com"
 *       404:
 *         description: No quotes found for this job
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/provider/nearby-jobs/{providerId}:
 *   get:
 *     summary: Get nearby job requests matching the provider's business category
 *     tags: [Provider]
 *     parameters:
 *       - in: path
 *         name: providerId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the service provider
 *     responses:
 *       200:
 *         description: List of nearby job requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "661fa2e627a5f74134d02c4d"
 *                   seeker_id:
 *                     type: string
 *                   seeker_name:
 *                     type: string
 *                   job_category:
 *                     type: string
 *                   job_description:
 *                     type: string
 *                   job_location:
 *                     type: string
 *                   job_coordinates:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "Point"
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [73.7758, 18.559]
 *       404:
 *         description: Service provider not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/provider/submit-quote:
 *   post:
 *     summary: Submit a quote for a job request
 *     tags: [Provider]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - providerId
 *               - jobId
 *               - quoteAmount
 *               - message
 *             properties:
 *               providerId:
 *                 type: string
 *                 example: "662000f5a8c2b2d5b8e0ff6a"
 *               jobId:
 *                 type: string
 *                 example: "661fa2e627a5f74134d02c4d"
 *               quoteAmount:
 *                 type: number
 *                 example: 1800
 *               message:
 *                 type: string
 *                 example: "We can complete this job within 2 days."
 *     responses:
 *       201:
 *         description: Quote submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Quote submitted successfully
 *                 quote:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     jobId:
 *                       type: string
 *                     providerId:
 *                       type: string
 *                     quoteAmount:
 *                       type: number
 *                     message:
 *                       type: string
 *                     seeker_id:
 *                       type: string
 *                     seeker_name:
 *                       type: string
 *       404:
 *         description: Invalid provider or job ID
 *       500:
 *         description: Server error
 */
