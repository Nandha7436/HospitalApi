const express = require('express');
const { registerPatient, getAllReports } = require('../controllers/patientController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', protect, registerPatient);
router.get('/:id/all_reports', protect, getAllReports);

module.exports = router;
