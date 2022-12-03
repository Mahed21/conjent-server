const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    apiKey: {
      type: String,
      required: true,
    },
    secretKey: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
