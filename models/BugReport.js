'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var bugSchema = Schema( {
    userID: {type:Schema.Types.ObjectId}, // need to add in this line
    shortDesc: String,
    detailDesc: String,
} );

module.exports = mongoose.model( 'BugReport', bugSchema );