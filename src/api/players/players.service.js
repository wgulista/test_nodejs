const axios = require('axios');
const _ = require('underscore');

const url = `https://alivebyacadomia.github.io/headtohead.json`;

const getPlayersList = async () => {
    let response = [];
    try {
        response = await axios.get(url);
    } catch (error) {
        throw error;
    }
    return response;
}

module.exports = {
    getPlayers: function(callback) {
        getPlayersList()
            .then(results => {
                let orderPlayers = results.data
                return callback(null, results.data)
            })
            .catch(err => {
                return callback(err, null)
            })
    },
    getPlayerById: function(idPlayer, callback) {
        let playerById = [];
        getPlayersList()
            .then(results => {
                playerById = results.data.players.filter(player => {
                    return player.id == idPlayer ? player : '';
                })
                
                return callback(null, playerById)
            })
            .catch(err => {
                return callback(err, null)
            })
    }
}