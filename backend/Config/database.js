const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_URL;

const connectionDB = () => {
  mongoose
    .connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to MongoDB Database");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectionDB;
