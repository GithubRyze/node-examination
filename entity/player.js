'use strict';
const db = require('../db/mysqlDb.js');
const Sequelize = require('sequelize');

const Player = db.define('player', {
    id: { type: Sequelize.BIGINT, allowNull: false, autoIncrement: true, primaryKey: true, comment: 'player id' },
    name: { type: Sequelize.STRING, allowNull: false, comment: 'player name' },
    position: { type: Sequelize.ENUM('C', 'PF', 'SF', 'PG', 'SG'), allowNull: false, comment: 'player position in team'}
}, {
    engine: 'INNODB',
    comment: 'this a player table'
});
Player.sync();

const createPlayer = function(player = {}){
    return Player.create(player);
};
module.exports.createPlayer = createPlayer;
const findPlayerById = function(id){
    return Player.findByPk(id);

};
module.exports.findPlayerById = findPlayerById;
const updatePlayer = function(player = {}){
    return Player.update(player, {where: {id: player.id}});

};
module.exports.updatePlayer = updatePlayer;
const deletePlayerById = function(id){
    return Player.destroy({where: {id}});
};
module.exports.deletePlayerById = deletePlayerById;
module.exports.player = Player;