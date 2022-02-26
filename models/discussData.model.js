const mongoose = require("mongoose")
const { ObjectId } = require("bson");
const Schema = mongoose.Schema

const History = new Schema({
  userId: {
    type: ObjectId,
    default: "",
  },
  perspective: {
    type: Array,
    default: "",
  },
  purpose: {
    type: Array,
    default: "",
  },
  version: {
    type: Array,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

const DiscussData = new Schema({
  FNId: {
    type: ObjectId,
    default: "",
  },
  dataName: {
    type: String,
    default: "",
  },
  history: {
    type: [History],
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model("DiscussData", DiscussData)