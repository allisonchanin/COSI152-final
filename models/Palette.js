'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var paletteSchema = Schema( {
  userID: {type:Schema.Types.ObjectId, ref:'User'},
  colorId: {type:Schema.Types.ObjectId,ref:'Color'},
  // could have a palette id , so could have a palette for a user think on it
} );

module.exports = mongoose.model( 'Palette', paletteSchema );