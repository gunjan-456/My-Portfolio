const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const Contact = require("./Models/Contact")

const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch(err => console.log(err))


app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields required" })
  }

   if (!email.includes("@")) {
    return res.status(400).json({ msg: "Invalid email" })
  }

  if (message.length > 500) {
    return res.status(400).json({ msg: "Message too long" })
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
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: ` New Message from ${name}`,
      html: `
        <div style="font-family:Arial; padding:20px; background:#0a0a0a; color:#fff;">
          <h2>New Portfolio Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <div style="background:#111; padding:10px; border-radius:6px;">
            ${message}
          </div>
        </div>
      `
    })

    
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Thanks for contacting me 🙌",
      html: `
        <div style="font-family:Arial; padding:20px;">
          <h2>Hi ${name} 👋</h2>
          <p>Thank you for reaching out! I have received your message and will get back to you soon.</p>
          <p>Meanwhile, you can explore my portfolio.</p>
          <br/>
          <p>Best Regards,<br/>Gunjan Singh</p>
        </div>
      `
    })

    res.status(200).json({ msg: "Message sent & saved ✅" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server error ❌" })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server connected on PORT ${process.env.PORT}`)
})