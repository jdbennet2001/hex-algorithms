/* jshint esnext: true */

var path      = require('path');
var assert    = require('chai').assert;
var jsonfile  = require('jsonfile');

var dataTX    = require('../modules/dataTX');
var hexUtils  = require('../modules/hexUtils');

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

describe('Adjacent nodes', function() {

    let utils;

    before(function() {

      //Load data from JSON file
      const data_path = path.join(__dirname, '../data/state.json');
      const model  = jsonfile.readFileSync(data_path);

      //Translate JSON to our internal model
      const state = dataTX( model );

      //analysis support for the state model
      utils = new hexUtils(this.state);

    });

    it('Adjacent nodes for even row cell', function() {

    });

});
