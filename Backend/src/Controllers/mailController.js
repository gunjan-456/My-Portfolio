const nodemailer = require("nodemailer")

const sendMail = async (req, res) => {
  const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: `Message from ${name}`,
      text: message,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.log(error)
    res.status(500).json({ success: false })
  }
}

module.exports = { sendMail }