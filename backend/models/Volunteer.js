const mongoose = require('mongoose');
const VolunteerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  area: String,
});
module.exports = mongoose.model('Volunteer', VolunteerSchema);
