var jsonfile  = require('jsonfile');
var path      = require('path');
var assert    = require('chai').assert;

var dataTX    = require('../modules/dataTX');


describe('Load Model', function() {

    var model;
    var state;

    it('Should load model as valid JSON', function() {
      var data_path = path.join(__dirname, '../data/state.json');
      model  = jsonfile.readFileSync(data_path);
      assert.isDefined(model, 'Initial model data not defined.');
    });

    it( 'Generate state from file', function(){
      state = dataTX( model );
      assert.isDefined(state, 'Model correctly transformed into state object');
      assert.equal( Object.keys(state).length, model.board.width * model.board.height, 'All keys generated.');
    });

});
