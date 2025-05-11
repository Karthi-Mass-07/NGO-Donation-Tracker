const mongoose = require('mongoose');

const DistributionSchema = new mongoose.Schema(
  {
    location: String,
    message: String,
    amountDistributed: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model('Distribution', DistributionSchema);
