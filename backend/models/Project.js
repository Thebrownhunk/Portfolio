const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true, trim: true },
  description: { type: String, required: true },
  image:       { type: String, default: '' },
  emoji:       { type: String, default: '💻' },
  category:    { type: String, enum: ['fullstack', 'frontend', 'backend', 'mobile'], required: true },
  tags:        [{ type: String }],
  githubUrl:   { type: String, default: '' },
  liveUrl:     { type: String, default: '' },
  featured:    { type: Boolean, default: false },
  order:       { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
