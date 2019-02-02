'use strict';
const player = require('../entity/player');
const utils = require('../utils/utils');
const Business = require('../entity/business');
const Player = require('../entity/playerEntity');
module.exports = {
    //create player
    createPlayer: function(req, res, next){

        const name = req.body.name;
        const position = req.body.position;
        if (utils.isEmpty(name) || utils.isEmpty(position)){
            res.status(405).json(new Business(405, 'Invalid input', {}));
            return;
        }
        if (!utils.isInStrings(position)){
            res.status(405).json(new Business(405, 'Invalid position value', {}));
            return;
        }
        player.createPlayer(new Player(0, name, position)).then(player => {
            if (player){
                res.status(200).json(new Business(200, 'create success', player));
            } else {
                res.status(404).json(new Business(404, 'create failed', {}));
            }
        }).catch(err => {
            if (err){
                throw new Business(500, 'Server internal error', {});
            }
        });
    },
    //get player
    getPlayerById: function(req, res, next){
        if (!utils.isNumber(req.params.playerId)){
            res.status(400).json(new Business(400, 'Invalid ID supplied', {}));
            return;
        }
        const id = Number.parseInt(req.params.playerId);
        player.findPlayerById(id).then(player => {
            if (player){
                res.status(200).json(new Business(200, 'success', player));
            } else {
                res.status(404).json(new Business(404, 'Player not found', {}));
            }
        }).catch(err => {
            if (err){
                throw new Business(500, 'Server internal error', {});
            }
        });
    },
    //update player
    updatePlayer: function(req, res, next){
        const name = req.body.name;
        const position = req.body.position;

        if (utils.isEmpty(name) || utils.isEmpty(position)){
            res.status(405).json( new Business(405, 'Invalid params', {}));
            return;
        }
        if (!utils.isInStrings(position)){
            res.status(405).json(new Business(405, 'Invalid params', {}));
            return;
        }
        if (!utils.isNumber(req.body.id)){
            res.status(400).json(new Business(400, 'Invalid ID supplied', {}));
            return;
        }
        const id = Number.parseInt(req.body.id);
        player.findPlayerById(id).then(result => {
            if (result){
                player.updatePlayer(new Player(id, name, position)).then(row => {
                    if (row){
                        res.status(200).json(new Business(200, 'update success', {}));
                    } else {
                        res.status(200).json(new Business(200, 'update failed', {}));
                    }
                });
            } else {
                res.status(404).json(new Business(404, 'update failed', {}));
            }
        }).catch(err => {
            if (err){
                throw new Business(500, 'Server internal error', {});
            }
        });
    },
    //delete player
    deletePlayerById: function(req, res, next){
        if (!utils.isNumber(req.params.playerId)){
            res.status(400).json(new Business(400, 'Invalid ID supplied', {}));
            return;
        }
        const id = Number.parseInt(req.params.playerId);
        player.deletePlayerById(id).then(row => {
            if (row){
                res.status(200).json(new Business(200, 'delete success', {}));
            } else {
                res.status(404).json(new Business(404, 'Player not found', {}));
            }
        }).catch(err => {
            if (err){
                throw new Business(500, 'Server internal error', {});
            }
        });
    }

};