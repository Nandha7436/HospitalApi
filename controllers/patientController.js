const Patient = require('../models/patient');

exports.registerPatient = async (req, res) => {
  const { phoneNumber, name, age, address } = req.body;

  try {
    let patient = await Patient.findOne({ phoneNumber });
    if (patient) {
      return res.json(patient);
    }
    patient = new Patient({ phoneNumber, name, age, address });
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllReports = async (req, res) => {
  try {
    const reports = await Report.find({ patient: req.params.id }).sort('date');
    res.json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
