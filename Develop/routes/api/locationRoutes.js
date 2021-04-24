const router = require('express').Router();
const { Trip, Location, Traveller } = require('../../models');

// GET all travellers and locations
router.get('/location', async (req, res) => {
  try {
    const locationData = await Traveller.findAll({
      include: [{ model: Traveller }, { model: Location }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//NEED TO DO POST

router.get('/location/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Location }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No Location found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a single location
router.delete('/location/:id', async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [{ model: Location }],
    });

    if (!locationData) {
      res.status(404).json({ message: 'No Location found with that id!' });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
