const mongoose = require("mongoose");

// Define Schemes
const scheduleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
  }
);

// Create new schedule document
scheduleSchema.statics.create = function (payload) {
  // this === Model
  const schedule = new this(payload);
  // return Promise
  return schedule.save();
};

// Find All
scheduleSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by scheduleId
scheduleSchema.statics.findOneById = function (_id) {
  return this.findById({ _id });
};

// Update by scheduleId
scheduleSchema.statics.updateByTodoid = function (_id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
  return this.findByIdAndUpdate({ _id }, payload, { new: true });
};

// Delete by scheduleId
scheduleSchema.statics.deleteById = function (_id) {
  return this.deleteOne({ _id });
};

// Create Model & Export
module.exports = mongoose.model("Schedule", scheduleSchema);
