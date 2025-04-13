import express from 'express';
import { seekerRouter } from './routes/seeker.routes.js';
import { providerRouter } from './routes/provider.routes.js'
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js'; // <-- Import our Swagger config

const app = express();
app.use(express.json());

// Serve Swagger docs at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/seeker', seekerRouter);
app.use('/api/provider', providerRouter);

export default app;
