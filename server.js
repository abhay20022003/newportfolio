
// server.js (Backend)
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000", // Local frontend
      "https://myportfolio-azure-xi.vercel.app/", // Deployed frontend
    ],
    methods: "GET, POST",
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: "abhaysingh20022003@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default app;
