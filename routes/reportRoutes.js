const express = require('express');
const { createReport, getReportsByStatus } = require('../controllers/reportController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:id/create_report', protect, createReport);
router.get('/:status', protect, getReportsByStatus);

module.exports = router;
