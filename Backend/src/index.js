const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const Contact = require("./Models/Contact")

const app = express()


const allowedOrigins = [
  "http://localhost:5173"
]


app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
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


app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields required" })
  }

  try {

    await Contact.create({ name, email, message })

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `🚀 New Message from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; background:#0f172a; padding:20px;">
        
        <div style="max-width:500px; margin:auto; background:#111827; padding:20px; border-radius:12px; color:white;">
          
          <h2 style="text-align:center; color:#a855f7;">📩 New Portfolio Message</h2>

          <hr style="border:0.5px solid #374151; margin:15px 0;" />

          <p><strong style="color:#c084fc;">👤 Name:</strong> ${name}</p>

          <p>
            <strong style="color:#c084fc;">📧 Email:</strong>
            <a href="mailto:${email}" style="color:#60a5fa; text-decoration:none;">
              ${email}
            </a>
          </p>

          <p><strong style="color:#c084fc;">💬 Message:</strong></p>

          <div style="background:#1f2937; padding:12px; border-radius:8px; margin-top:5px;">
            ${message}
          </div>

          <p style="text-align:center; font-size:12px; color:#9ca3af; margin-top:20px;">
            🚀 Sent from your portfolio
          </p>

        </div>

      </div>
      `
    })

    await transporter.sendMail({
      from: `"Gunjan Singh" <${process.env.EMAIL}>`,
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `
      <div style="font-family: Arial, sans-serif; background:#0f172a; padding:20px;">
        
        <div style="max-width:500px; margin:auto; background:#111827; padding:20px; border-radius:12px; color:white;">
          
          <h2 style="text-align:center; color:#a855f7;">
            🙌 Thanks for reaching out!
          </h2>

          <p style="margin-top:15px;">
            Hi <b style="color:#c084fc;">${name}</b>,
          </p>

          <p style="color:#d1d5db;">
            Thanks for contacting me. I’ve received your message and will get back to you soon.
          </p>

          <div style="background:#1f2937; padding:12px; border-radius:8px; margin:15px 0;">
            <b>Your Message:</b><br/>
            ${message}
          </div>

          <p style="color:#9ca3af; font-size:13px;">
            ⏳ Expected response time: within 24 hours
          </p>

          <hr style="border:0.5px solid #374151; margin:15px 0;" />

          <p style="text-align:center; font-size:12px; color:#9ca3af;">
            💜 Gunjan Singh | Full Stack Developer
          </p>

        </div>

      </div>
      `
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