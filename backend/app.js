const express = require("express");
const redis = require("redis");
const mongoose = require("mongoose");
const cors = require("cors");   

const app = express();

app.use(cors());   

// MongoDB
mongoose.connect("mongodb://mongo:27017/store")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Redis
const client = redis.createClient({ url: "redis://redis:6379" });

client.connect()
  .then(() => console.log("Redis connected"))
  .catch(err => console.error(err));

// ROOT ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API ROUTE
app.get("/api", async (req, res) => {
  try {
    let visits = await client.incr("visits");
    res.send(`SecureStore Backend 🚀 Visits: ${visits}`);
  } catch (err) {
    res.status(500).send("Error connecting to Redis");
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));