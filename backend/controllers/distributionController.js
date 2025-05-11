const Distribution = require('../models/Distribution');

exports.addDistribution = async (req, res) => {
  const { location, message, amountDistributed } = req.body;

  try {
    const distribution = new Distribution({
      location,
      message,
      amountDistributed,
    });

    await distribution.save();

    res.status(201).json({ message: "Distribution added", distribution });
  } catch (error) {
    console.error("Error adding distribution:", error);
    res.status(500).json({ message: "Failed to add distribution" });
  }
};
exports.getDistributions = async (req, res) => {
  const distributions = await Distribution.find();
  res.status(200).json({ distributions });
};
