import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Service_Seeker_Model } from '../models/Service_Seeker.model.js';
import { Service_Provider_Model } from '../models/Service_Provider.model.js';

export const seekerRegister = async (req, res) => {
  try {
    const { fullName, email, number, password, home_address, home_coordinates } = req.body;

    const existingUser = await Service_Seeker_Model.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Seeker already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const seeker = new Service_Seeker_Model({
      fullName,
      email,
      number,
      password: hashedPassword,
      home_address,
      home_coordinates
    });

    await seeker.save();

    const token = jwt.sign({ id: seeker._id, role: 'seeker' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Seeker registration successful', token, user: seeker, role: 'seeker' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during seeker registration' });
  }
};

export const seekerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const seeker = await Service_Seeker_Model.findOne({ email });
    if (!seeker) return res.status(404).json({ message: 'Seeker not found' });

    const isMatch = await bcrypt.compare(password, seeker.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: seeker._id, role: 'seeker' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful for seeker', token, user: seeker, role: 'seeker' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during seeker login' });
  }
};

export const providerRegister = async (req, res) => {
  try {
    const {
      fullName,
      email,
      number,
      password,
      experience,
      business_name,
      business_type,
      business_address,
      business_coordinates
    } = req.body;

    const existingUser = await Service_Provider_Model.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Provider already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const provider = new Service_Provider_Model({
      fullName,
      email,
      number,
      password: hashedPassword,
      experience,
      business_name,
      business_type,
      business_address,
      business_coordinates
    });

    await provider.save();

    const token = jwt.sign({ id: provider._id, role: 'provider' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Provider registration successful', token, user: provider, role: 'provider' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during provider registration' });
  }
};

export const providerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const provider = await Service_Provider_Model.findOne({ email });
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    const isMatch = await bcrypt.compare(password, provider.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: provider._id, role: 'provider' }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful for provider', token, user: provider, role: 'provider' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during provider login' });
  }
};
