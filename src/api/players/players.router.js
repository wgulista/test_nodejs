const { showPlayers, showPlayerById } = require('./players.controller');
const router = require('express').Router();

router.get("/", showPlayers);
router.get("/:id", showPlayerById);

module.exports = router;