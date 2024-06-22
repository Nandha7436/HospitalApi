const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

exports.registerDoctor = async (req, res) => {
  const { username, password } = req.body;

  try {
    const doctor = new Doctor({ username, password });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginDoctor = async (req, res) => {
  const { username, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ username });
    if (doctor && await doctor.matchPassword(password)) {
      const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
