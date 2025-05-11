const Volunteer = require('../models/Volunteer');

exports.addVolunteer = async (req, res) => {
  const { name, phone, area } = req.body;
  const volunteer = new Volunteer({ name, phone, area });
  await volunteer.save();
  res.status(201).json({ message: "Volunteer added", volunteer });
};

exports.getVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find();
  res.status(200).json({ volunteers });
};
