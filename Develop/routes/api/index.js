const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');

router.use('/trip', tripRoutes);
router.use('/location', locationRoutes);
router.use('/traveller', travellerRoutes);

module.exports = router;
