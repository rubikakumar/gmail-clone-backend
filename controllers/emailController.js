const Email = require('../models/Email');

const sendEmail = async (req, res) => {
  try {
    const email = await Email.create({ ...req.body, from: req.user.email });
    res.status(201).json(email);
  } catch (error) {
    console.error('Email sending failed:', error.message); 
    res.status(400).json({ error: 'Email sending failed', details: error.message });
  }
};

const getEmails = async (req, res) => {
  try {
    console.log('Request Params Folder:', req.params.folder); 
    console.log('Request User Email:', req.user?.email); 

    const emails = await Email.find({
      folder: req.params.folder,
      $or: [
        { to: req.user.email },
        { from: req.user.email },
      ],
    });

    console.log('Query Result:', emails); 
    res.status(200).json(emails);
  } catch (error) {
    console.error('Failed to fetch emails:', error.message); 
    res.status(400).json({ error: 'Failed to fetch emails', details: error.message });
  }
};

module.exports = { sendEmail, getEmails };
