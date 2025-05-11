const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema(
  {
    donorName: String,
    amount: Number
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Donation', DonationSchema);
