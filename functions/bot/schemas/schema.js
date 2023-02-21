const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4 } = require("uuid");

const users = new Schema(
  {
    chatId: {
      type: Number,
    },
    app: {
        type: String,
        default: null,
    },
	pid: {
        type: Number,
        default: null,
    },
    offerID:  {
        type: Number,
        default: null,
    },
    firstTap: {type: Boolean,
    default: false},
   secondTap: {type: Boolean,
  default: false
  },


   
  },
  {
    versionKey: false,
  }
);


const User = mongoose.model("user", users);

module.exports = {
  User,
};