'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var colorSchema = Schema( {
  name: String,
  numberID: String,
  hex:String,
  colorCategory:String,
  strImage: String,
  using: Boolean,
} );

module.exports = mongoose.model( 'Color', colorSchema );