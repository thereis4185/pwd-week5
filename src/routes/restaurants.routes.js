﻿const express = require('express');
const restaurantsController = require('../controllers/restaurants.controller');

const router = express.Router();

router.get('/popular', restaurantsController.getPopularRestaurants);
router.get('/', restaurantsController.getRestaurants);
router.get('/:id', restaurantsController.getRestaurant);
router.post('/', restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);

module.exports = router;