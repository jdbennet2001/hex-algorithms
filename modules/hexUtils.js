/*
  Provide path / analysis models for the current state of the board
 */

var _ = require('lodash');

function hexUtils(state){

}

hexUtils.prototype.adjacent = function(x,y){

};

function key( x, y ){
    x = _.padStart(x.toString(), 2, '0');
    y = _.padStart(y.toString(), 2, '0');
    return x + ' - ' + y;
}

module.exports = hexUtils;
