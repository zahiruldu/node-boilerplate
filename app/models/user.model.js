/**
 * This schema for same user
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique:true,
    index: true
  },
  name: {
    type: String,
    index: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updatedDate: {
    type: Date,
    default: Date.now
  }
});

const Model = mongoose.model('User', UserSchema);
module.exports = Model;