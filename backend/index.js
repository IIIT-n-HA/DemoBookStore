// app.use(cors({
//   origin:,
//   methods:,
//   allowedHeaders:
// }));

const express = require("express");
const mongo = require("mongoose"); // Make sure this is mongoose, not mongo
const port = 5555;
const book = require("./models/db");
const dbURL = "mongodb+srv://BullMonk:bullmonk3312@d-one.hnw8ran.mongodb.net/";
const bookroute = require("./routes/bookroute");

const app = express();
app.use(express.json()); // Make sure to call it as a function
app.use("/books", bookroute);

const cors = require("cors");
app.use(cors());

mongo
  .connect(dbURL)
  .then(() => {
    // Corrected line
    console.log("App connected to database.");
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err)); // Added error handling
