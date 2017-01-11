var _ = require('lodash');

/*
 Utility to transform a serialized model to a valid Redux-ready state.
 */

function dataTX( model ){

  var state = {};

  function key( x, y ){
      x = _.padStart(x.toString(), 2, '0');
      y = _.padStart(y.toString(), 2, '0');
      return x + ' - ' + y;
  }

  for ( var x = 1; x <= model.board.width; x++ ){
    for( var y = 1; y <= model.board.height; y++ ){
      state[ key(x,y) ] = {};
    }
  }
  return state;
}



 module.exports =  dataTX;
