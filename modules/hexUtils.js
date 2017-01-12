"use strict";
/* jshint esnext:true */


/*
  Provide path / analysis models for the current state of the board
 */

var _     = require('lodash');
var util  = require( 'util' );

let board_height;
let board_width;
let state;

function hexUtils(input_state){
  board_width = input_state.model.board.width;
  board_height = input_state.model.board.height;
  state = input_state;

}

/*
 Calculate the distance between two cells.
 Cells between 0 < length < sqrt(2) distance apart are adjacent.
 */
hexUtils.prototype.adjacent = function(x1,y1){

    //Adjust y values by 0.5 because the rows are staggered
    y1 = (x1 % 2 == 1) ? y1 + 0.5 : y1;

    var adjacent_list = [];

    //Walk all values to find ones within a reasonable difference
    for ( let x2 = 1; x2 < board_width; x2++ ){
        for ( let y2 = 1; y2 < board_height; y2++ ){
            let y_delta = (x2 % 2 == 1) ? y2 + 0.5 : y2;
            let length = Math.sqrt( Math.pow((x1-x2), 2) + Math.pow((y1-y_delta), 2) );
            if ( length < 1.5 && length > 0.5 ){
               adjacent_list.push({x: x2, y: y2} );
            }
        }
    }

    return adjacent_list;
};

function key( x, y ){
    x = _.padStart(x.toString(), 2, '0');
    y = _.padStart(y.toString(), 2, '0');
    return x + ' - ' + y;
}

module.exports = hexUtils;
