const express = require("express");
const nodemailer = require("nodemailer");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://skisnjesko.com", // Allow only your frontend domain
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(bodyParser.json());

// Function to send Telegram messages
async function sendTelegramMessage(message) {
  const telegramToken = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: message,
    });
    console.log("Message sent to Telegram");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
}

// POST route to handle form submission
app.post("/api/apply", async (req, res) => {
  const {
    name,
    age,
    height,
    weight,
    shoesnumber,
    foodspecifics,
    otherspecifics,
    phone,
    phone2,
  } = req.body;

  const message = `New Application:\n\nName: ${name}\nAge: ${age}\nHeight: ${height} cm\nWeight: ${weight} kg\nShoes Number: ${shoesnumber}\nFood Specifics: ${foodspecifics}\nOther Specifics: ${otherspecifics}\nParent's Phone: ${phone}\nChild's Phone: ${phone2}`;

  try {
    await sendTelegramMessage(message);
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Error submitting application" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
