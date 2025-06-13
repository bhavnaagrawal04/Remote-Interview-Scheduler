const nodemailer = require("nodemailer");

// Use Ethereal for test/mock emails
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: process.env.ETHEREAL_USER, // from Ethereal account
        pass: process.env.ETHEREAL_PASS
    }
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: '"Interview Scheduler" <no-reply@interview.com>',
            to,
            subject,
            text,
        });

        console.log("Mock Email sent:", info.messageId);
        console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error("Error sending email:", error.message);
    }
};

module.exports = sendEmail;
