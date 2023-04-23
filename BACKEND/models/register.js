const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerSchema = new Schema({

  EmployeeID: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },

  NICNumber: {
    type: String,
    required: true,
  },

  Address: {
    type: String,
    required: true,
  },

  PhoneNumber: {
    type: String,
    required: true,
  },

  EmailAddress: {
    type: String,
    required: true,
  },

  DateOfBirth: {
    type: String,
    required: true,
  },

  RegisteredDate: {
    type: String,
    required: true,
  },

  Department: {
    type: String,
    required: true,
  },

  Image: {
    type: String,
    required: true,
  },

  

});

const register = mongoose.model("register", registerSchema);

module.exports = register;
