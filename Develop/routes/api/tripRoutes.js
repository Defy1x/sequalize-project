const router = require('express').Router();
const { Trip, Location, Traveller } = require('../../models');

// GET all travellers and locations
router.get('/trips', async (req, res) => {
  try {
    const tripData = await Traveller.findAll({
      include: [{ model: Traveller }, { model: Location }],
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a single trip
router.delete('/trips/:id', async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [{ model: Trip }],
    });

    if (!tripData) {
      res.status(404).json({ message: 'No trip found with that id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
