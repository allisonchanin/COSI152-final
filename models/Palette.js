'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var paletteSchema = Schema( {
  userId: {type:Schema.Types.ObjectId, ref:'User'},
  colorId: {type:Schema.Types.ObjectId,ref:'Color'},
} );

module.exports = mongoose.model( 'Palette', paletteSchema );