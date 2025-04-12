import express from 'express';
import { seekerRouter } from './routes/seeker.routes.js';
import { providerRouter } from './routes/provider.routes.js'

const app = express();
app.use(express.json());

app.use('/api/seeker', seekerRouter);
app.use('/api/provider', providerRouter);

export default app;
