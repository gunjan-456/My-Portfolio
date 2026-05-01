const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const Contact = require("./Models/Contact")

const app = express()


const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolioo-rho-gold.vercel.app"
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}))

app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch(err => console.log("DB ERROR:", err.message))


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
    })

    
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    })

   
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `<p>Hi ${name}, thanks for contacting. I’ll reply soon.</p>`
    })

    res.status(200).json({ msg: "Message sent ✅" })

  } catch (error) {
    console.log("❌ ERROR:", error.message)
    res.status(500).json({ msg: "Server error ❌" })
  }
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})