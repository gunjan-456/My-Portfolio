const express = require("express")
const nodemailer = require("nodemailer")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/send", async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields required" })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL, 
      subject: ` New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#0a0a0a; padding:20px; color:#fff;">
          
          <div style="max-width:600px; margin:auto; background:#111; border-radius:10px; overflow:hidden; border:1px solid #333;">
            
            <!-- HEADER -->
            <div style="background: linear-gradient(90deg, #9333ea, #ec4899, #3b82f6); padding:15px; text-align:center;">
              <h2 style="margin:0; color:#fff;">🚀 New Portfolio Message</h2>
            </div>

            <!-- BODY -->
            <div style="padding:20px;">
              
              <p style="color:#ccc; font-size:14px;">
                You have received a new message from your portfolio website.
              </p>

              <div style="margin-top:20px; line-height:1.6;">
                <p><strong style="color:#a78bfa;">👤 Name:</strong> ${name}</p>
                <p><strong style="color:#f472b6;">📧 Email:</strong> ${email}</p>

                <p style="margin-top:10px;">
                  <strong style="color:#60a5fa;">💬 Message:</strong>
                </p>

                <div style="background:#1a1a1a; padding:12px; border-radius:8px; border:1px solid #333;">
                  ${message}
                </div>
              </div>

            </div>

            <!-- FOOTER -->
            <div style="padding:12px; text-align:center; font-size:12px; color:#888; border-top:1px solid #222;">
              ⚡ Sent from Gunjan Singh Portfolio
            </div>

          </div>

        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ msg: "Email sent successfully" })

  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server error" })
  }
})

app.listen(5000, () => {
  console.log("Server running on port 5000")
})