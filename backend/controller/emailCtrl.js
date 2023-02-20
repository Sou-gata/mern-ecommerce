const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        service: "gmail",
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASS,
        },
    });

    let info = await transporter.sendMail({
        from: '"Password Reset - Ecommerce"',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.htm,
    });

    console.log("Message sent: %s", info.messageId);
});

module.exports = sendEmail;
