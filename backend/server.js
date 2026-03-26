const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Contact Manager API is running" });
});

// MongoDB connection (LOCAL)
mongoose.connect("mongodb://localhost:27017/contactmanager")
.then(() => {
  console.log("MongoDB Connected");
})
.catch(err => console.log(err));


app.use("/api/contacts", contactRoutes);


app.listen(5000, () => {

  console.log("Server running on port 5000");

});