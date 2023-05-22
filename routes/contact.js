
const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contactus');

router.get('/contact',contactController.contactus)

router.post('/success',contactController.successfile);


module.exports = router