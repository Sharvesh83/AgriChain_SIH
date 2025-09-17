const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      match: [/^[0-9]{10}$/, "Invalid mobile number"], 
    },
    role: {
      type: String,
      enum: ["Farmer", "Retailer", "Distributor", "Consumer", "Admin"],
      required: true,
    },
    aadhar: {
      type: String,
      required: true,
      unique: true,
      match: [/^[0-9]{4}-[0-9]{4}-[0-9]{4}$/, "Invalid Aadhaar format"],
    },
    businessName: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, 
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
