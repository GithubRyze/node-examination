'use strict';
const player = require('../controller/player');
const express = require('express');
const router = express.Router();

router.get('/player/:playerId', player.getPlayerById);
router.post('/player', player.createPlayer);
router.put('/player', player.updatePlayer);
router.delete('/player/:playerId', player.deletePlayerById);

module.exports = router;