// import express from 'express';
// import { Service_Provider } from '../models/Service_Provider.model.js'
// const router = express.Router();

// router.post('/nearby-providers', async (req, res) => {
//   try {
//     const { latitude, longitude, maxDistanceInKm } = req.body;

//     if (!latitude || !longitude) {
//       return res.status(400).json({ error: 'Latitude and Longitude required' });
//     }

//     const providers = await Service_Provider.find({
//       business_coordinates: {
//         $near: {
//           $geometry: {
//             type: 'Point',
//             coordinates: [longitude, latitude],
//           },
//           $maxDistance: maxDistanceInKm * 1000,
//         },
//       },
//     });

//     res.json(providers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// export default router;
