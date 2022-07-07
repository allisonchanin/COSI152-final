'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bugSchema = Schema( {
    shortDesc: String,
    detailDesc: String,
} );

module.exports = mongoose.model( 'BugReport', bugSchema );