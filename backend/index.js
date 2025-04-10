require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// App config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/reminderAppDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
  }
}
connectDB();

// Schema
const reminderSchema = new mongoose.Schema({
  reminderMsg: String,
  remindAt: String,
  issReminded: Boolean,
});

// Model
const Reminder = mongoose.model("reminder", reminderSchema);

// GET all reminders
app.get("/getAllReminder", async (req, res) => {
  try {
    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (err) {
    console.error("Error fetching reminders:", err);
    res.status(500).send("Server Error");
  }
});

// POST: Add reminder
app.post("/addReminder", async (req, res) => {
  try {
    const { reminderMsg, remindAt } = req.body;
    const reminder = new Reminder({ reminderMsg, remindAt, issReminded: false });
    await reminder.save();

    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (err) {
    console.error("Error adding reminder:", err);
    res.status(500).send("Server Error");
  }
});

// POST: Delete reminder
app.post("/deleteReminder", async (req, res) => {
  try {
    const { id } = req.body;
    await Reminder.deleteOne({ _id: id });

    const reminderList = await Reminder.find({});
    res.send(reminderList);
  } catch (err) {
    console.error("Error deleting reminder:", err);
    res.status(500).send("Server Error");
  }
});

// Listen
app.listen(9000, () => console.log("🚀 Backend is running on port 9000"));
