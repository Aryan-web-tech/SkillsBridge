import dotenv from 'dotenv';
import { connectDB } from './src/db/connect.js'
import app from './app.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
