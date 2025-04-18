// src/docs/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Service Job API',
      version: '1.0.0',
      description: 'API for job requests, quotes, and service providers'
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update this if you use a different port or host
      },
    ],
  },
  apis: ['./src/docs/*.js'], // This tells Swagger to look in the docs folder
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
