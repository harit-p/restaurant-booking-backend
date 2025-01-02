const express = require('express');
const router = express.Router();
const { createBooking, getBooking, deleteBooking } = require('../controllers/bookingController');

// Route to create a new booking
router.post('/', createBooking);

// Route to get a booking by ID
router.get('/:id', getBooking);

// Route to delete a booking by ID
router.delete('/:id', deleteBooking);

module.exports = router;
