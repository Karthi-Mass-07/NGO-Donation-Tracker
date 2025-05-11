const Donation = require('../models/Donation');

exports.createDonation = async (req, res) => {
  const { donorName, amount } = req.body;
  const donation = new Donation({ donorName, amount });
  await donation.save();
  res.status(201).json({ message: "Donation recorded", donation });
};

exports.getDonations = async (req, res) => {
  const donations = await Donation.find();
  res.status(200).json({ donations });
};

