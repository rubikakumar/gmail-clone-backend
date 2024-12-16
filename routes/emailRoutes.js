const express = require('express');
const { sendEmail, getEmails } = require('../controllers/emailController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/send', authMiddleware, sendEmail);
router.get('/:folder', authMiddleware, getEmails);

module.exports = router;
