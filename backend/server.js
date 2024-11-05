const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submission
app.post("/api/apply", async (req, res) => {
  const { name, age, height, weight, shoesnumber, foodspecifics, otherspecifics, phone, phone2 } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465, // Use 465 for SSL
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your Yahoo email
      pass: process.env.EMAIL_PASS, // your Yahoo password or app password
    },
  });

  // Configure email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL, // the recipient's email address
    subject: "New Ski Camp Application",
    text: `New application received:
    Name: ${name}
    Age: ${age}
    Height: ${height} cm
    Weight: ${weight} kg
    Shoes Number: ${shoesnumber}
    Food Specifics: ${foodspecifics}
    Other Specifics: ${otherspecifics}
    Parent's Phone: ${phone}
    Child's Phone: ${phone2}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error submitting application", details: error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
