const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects — with optional ?category= filter
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== 'all' ? { category } : {};
    const projects = await Project.find(filter).sort({ featured: -1, order: 1, createdAt: -1 });
    res.json({ success: true, count: projects.length, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// POST /api/projects — add project (admin)
router.post('/', async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Seed route for demo projects
router.post('/seed', async (req, res) => {
  const demos = [
    { title: 'ShopNest – E-Commerce Platform', description: 'Full-stack MERN e-commerce with Stripe payments and admin dashboard.', emoji: '🛒', category: 'fullstack', tags: ['React','Node.js','MongoDB','Stripe','Redux'], featured: true, order: 1 },
    { title: 'ChatFlow – Real-Time Chat', description: 'Socket.IO-powered real-time messaging with rooms and media sharing.', emoji: '💬', category: 'fullstack', tags: ['React','Socket.IO','Node.js','MongoDB'], featured: true, order: 2 },
    { title: 'DevMetrics – API Analytics', description: 'Analytics dashboard with rate limiting and API key management.', emoji: '📊', category: 'backend', tags: ['Node.js','Express','MongoDB'], featured: false, order: 3 },
    { title: 'DesignKit – Component Library', description: 'React library with 50+ accessible components and Storybook docs.', emoji: '🎨', category: 'frontend', tags: ['React','Tailwind','Storybook','TypeScript'], featured: false, order: 4 },
  ];
  await Project.deleteMany({});
  await Project.insertMany(demos);
  res.json({ success: true, message: 'Seeded projects.' });
});

module.exports = router;
