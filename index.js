const express= require('express');
// const cors=require('cors');
const app= express();
// app.use(cors());
app.use(express.json());

const nodemailer = require('nodemailer');

app.post('/newsletter', (req, res) => {
    async function sendEmail() {
        try {
            // Create a transporter object using SMTP transport
            const transporter = nodemailer.createTransport({
                host: 'smtp.zoho.com',
                port: 465, // SMTP port for Zoho Mail
                secure: true, // true for 465, false for other ports
                auth: {
                    user: 'support@jdtechnicalsolution.com', // Your Zoho Mail address
                    pass: 'Passc0de@2014' // Your Zoho Mail password
                },
                requireTLS: true // Force TLS
            });

            // Define email content
            const mailOptions = {
                from: 'support@jdtechnicalsolution.com', // Your Gmail address
                to:'bittusharma1777@gmail.com',
                subject: `Hello from Node.js!`,
                text: `welcome to JD technical Solution you come with this `
            };

            // Send email
            let info = await transporter.sendMail(mailOptions);

            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
            res.json({ 'message': "Email sent successfully" });

        } catch (error) {
            console.error('Error occurred:', error.message);
            res.status(500).json({ 'message': 'Error sending mail, please try again' });
        }
    }

    // Call the async function to send the email
    sendEmail();
});


app.listen(7000,()=>{
    console.log('listning to posrt number 7000')
})