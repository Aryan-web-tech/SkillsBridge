const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ServiceSeeker = require('../models/ServiceSeeker');
const ServiceProvider = require('../models/ServiceProvider');

// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with env variable in production

// ========== SEEKER REGISTRATION ==========
router.post('/seeker/register', async (req, res) => {
  try {
    const { name, email, number, location, password } = req.body;

    const existingUser = await ServiceSeeker.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Seeker already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeeker = new ServiceSeeker({
      name,
      email,
      number,
      location,
      password: hashedPassword,
    });

    await newSeeker.save();
    res.status(201).json({ message: 'Seeker registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during seeker registration' });
  }
});

// ========== SEEKER LOGIN ==========
router.post('/seeker/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const seeker = await ServiceSeeker.findOne({ email });
    if (!seeker) return res.status(404).json({ message: 'Seeker not found' });

    const isMatch = await bcrypt.compare(password, seeker.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: seeker._id, role: 'seeker' }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token, seeker });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during seeker login' });
  }
});

// ========== PROVIDER REGISTRATION ==========
router.post('/provider/register', async (req, res) => {
  try {
    const {
      name,
      email,
      number,
      location,
      servicecategory,
      speciality,
      experience,
      docs,
      password
    } = req.body;

    const existingUser = await ServiceProvider.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Provider already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newProvider = new ServiceProvider({
      name,
      email,
      number,
      location,
      servicecategory,
      speciality,
      experience,
      docs,
      password: hashedPassword
    });

    await newProvider.save();
    res.status(201).json({ message: 'Provider registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during provider registration' });
  }
});

// ========== PROVIDER LOGIN ==========
router.post('/provider/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const provider = await ServiceProvider.findOne({ email });
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: provider._id, role: 'provider' }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token, provider });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during provider login' });
  }
});

module.exports = router;
//auth.js