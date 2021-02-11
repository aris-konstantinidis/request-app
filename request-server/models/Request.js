const mongoose = require('mongoose')

const RequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  votes: { type: Number, default: 0 },
  date: { type: String, default: new Date().toLocaleString('de-DE') }
})

module.exports = mongoose.model('Request', RequestSchema)
