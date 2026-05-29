const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact — save message to MongoDB
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ success: false, message: 'All fields are required.' });

    const contact = await Contact.create({ name, email, message, ip: req.ip });
    res.status(201).json({ success: true, message: 'Message sent successfully!', data: { id: contact._id } });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const msgs = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: msgs.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// GET /api/contact — admin only (protected in production)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

module.exports = router;
