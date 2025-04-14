const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const ServiceSeeker = require('../models/ServiceSeeker');
const ServiceProvider = require('../models/ServiceProvider');


const seekerRegister =async (req, res) => 
{
  try {
    const { name, email, number, password } = req.body;

    const existingUser = await ServiceSeeker.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Seeker already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const seeker = new ServiceSeeker({
      name,
      email,
      number,
      password: hashedPassword,
    });

    await seeker.save();

    const token = jwt.sign({ id: seeker._id, role: 'seeker' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const role = "seeker"

    res.json({ message: 'Registration successful for seeker', token, seeker,role });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during seeker registration' });
  }
}

const seekerLogin =async (req, res) => 
{
    try {
        const { email, password } = req.body;
    
        const seeker = await ServiceSeeker.findOne({ email });
        if (!seeker) return res.status(404).json({ message: 'Seeker not found' });
    
        const isMatch = await bcrypt.compare(password, seeker.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: seeker._id, role: 'seeker' }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const role = "seeker"
        res.json({ message: 'Login successful for seeker', token, seeker,role });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during seeker login' });
      }
}

const providerRegister =async (req, res) => 
{
    try {
        const {
          name,
          email,
          phone,
          serviceCategory,
          speciality,
          experience,
          password
        } = req.body;
    
        const existingUser = await ServiceProvider.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Provider already exists' });
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const provider = new ServiceProvider({
          name,email,phone,password:hashedPassword,serviceCategory,speciality,experience
        });
    
        await provider.save();
    
        const token = jwt.sign({ id: provider._id, role: 'provider' }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const role = "provider"
        res.json({ message: 'Registration successful for provider', token, provider,role });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during provider registration' });
      } 
}

const providerLogin =async (req, res) => 
{
    try {
        const { email, password } = req.body;
    
        const provider = await ServiceProvider.findOne({ email });
        if (!provider) return res.status(404).json({ message: 'Provider not found' });
    
        const isMatch = await bcrypt.compare(password, provider.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    
        const token = jwt.sign({ id: provider._id, role: 'provider' }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const role = "provider"
        res.json({ message: 'Login successful for provider', token, provider,role });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error during provider login' });
      }     
}

module.exports = {seekerRegister,seekerLogin,providerRegister,providerLogin}