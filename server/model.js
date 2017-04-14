var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobSchema = new Schema({
  jobtitle: {
    type: String
  },
  company: {
    type: Date
  },
  formattedLocation: {
    type: String
  },
  date: {
    type: String
  },
  snippet: {
    type: String
  },
  url: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  jobkey: {
    type: String
  },
  status:{
    applied:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    interviewSchedule:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    interviewComplete:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    callbackInterview:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    callbackDone:[{
      date: Date,
      done:{type: Boolean, default: false}
    }],
    hired:[{
      date: Date,
      done:{type: Boolean, default: false}
    }]
  },
  notes:{
    note: [{
      date: Date,
      text: String}]
  },
  contacts: {
    contact:[{
      name: String,
      phone: String,
      email: String }]
  }
});

var Job = mongoose.model("Job", JobSchema);
module.exports = Job;


// jobtitle
// company
// formattedLocation
// date
// snippet
// url
// latitude
// longitude
// jobkey
// formattedRelativeTime