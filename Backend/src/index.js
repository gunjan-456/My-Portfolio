const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const Contact = require("./Models/Contact")

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://my-portfolio-utik.vercel.app"
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
      callback(null, true)
    } else {
      console.log("❌ Blocked by CORS:", origin)
      callback(new Error("Not allowed by CORS"))
    }
  },
  methods: ["GET", "POST"]
}))

app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB ERROR:", err.message))

app.get("/health", (req, res) => {
  res.status(200).json({ status: "alive" })
})

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields required" })
  }

  try {
   
    await Contact.create({ name, email, message })

  
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
      connectionTimeout: 5000,
    })

   
    try {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL}>`,
        to: process.env.EMAIL,
        subject: `🚀 New Message from ${name}`,
        html: `...same html...`
      })

      await transporter.sendMail({
        from: `"Gunjan Singh" <${process.env.EMAIL}>`,
        to: email,
        subject: "Thanks for contacting me 🙌",
        html: `...same html...`
      })

      return res.status(200).json({ msg: "Message + Email sent ✅" })

    } catch (mailError) {
      console.log("⚠️ Email failed but DB saved:", mailError.message)

    
      return res.status(200).json({ msg: "Saved (email failed) ✅" })
    }

  } catch (error) {
    console.log("❌ ERROR:", error.message)
    res.status(500).json({ msg: "Server error ❌" })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})