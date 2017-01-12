"use strict";

var path      = require('path');
var assert    = require('chai').assert;
var jsonfile  = require('jsonfile');

var dataTX    = require('../modules/dataTX');
var hexUtils  = require('../modules/hexUtils');

describe('Load Model', function() {

    var model;

    it('Should load model as valid JSON', function() {
      var data_path = path.join(__dirname, '../data/state.json');
      model  = jsonfile.readFileSync(data_path);
      assert.isDefined(model, 'Initial model data not defined.');
    });

    it( 'Generate state from file', function(){
      const state = dataTX( model );
      assert.isDefined(state, 'Model correctly transformed into state object');
      assert.equal( Object.keys(state.board).length, model.board.width * model.board.height, 'All keys generated.');
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
      utils = new hexUtils(state);

    });

    it('Adjacent nodes for first cell', function() {
        let adjacent_list = utils.adjacent(1,1);
        assert.equal( adjacent_list.length, 3 , 'Upper right cell has three neighbors');
    });

    it('Adjacent nodes for even row cell', function() {
        let adjacent_list = utils.adjacent(2,2);
        assert.equal( adjacent_list.length, 6 , 'Expect six neighbors.');
    });

    it('Adjacent nodes for odd row cell', function() {
        let adjacent_list = utils.adjacent(3,3);
        assert.equal( adjacent_list.length, 6 , 'Expect six neighbors.');
    });

});
