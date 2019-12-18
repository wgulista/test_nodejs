const { getPlayers, getPlayerById } = require("./players.service");

module.exports = {
    showPlayers: (req, res) => {
        getPlayers((err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    showPlayerById: (req, res) => {
        const id = req.params.id;

        getPlayerById(id, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
}