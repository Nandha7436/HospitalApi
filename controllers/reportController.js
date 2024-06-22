const Report = require('../models/report');

exports.createReport = async (req, res) => {
  const { status } = req.body;
  const doctorId = req.user.id;

  try {
    const report = new Report({
      doctor: doctorId,
      patient: req.params.id,
      status
    });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReportsByStatus = async (req, res) => {
  try {
    const reports = await Report.find({ status: req.params.status }).populate('patient').populate('doctor');
    res.json(reports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
