const express = require('express');
const cors = require('cors');
const fs = require('fs');
const html = require('./mail.js');
const html2 = require('./thankyouMail.js');
const app = express();
app.use(cors());
app.use(express.json());
const nodemailer = require('nodemailer');

app.post('/newsletter', (req, res) => {
    const recievers_name = req.body.name;
    const recievers_email = req.body.email;
    
    async function sendEmail() {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.zoho.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'support@jdtechnicalsolution.com',
                    pass: 'Passc0de@2014'
                },
                requireTLS: true
            });

            const mailOptions = {
                from: 'support@jdtechnicalsolution.com',
                to: `${recievers_email}`,
                subject: `${recievers_name} welcome to JDTS !`,
                html: html
            };

            let info = await transporter.sendMail(mailOptions);

            console.log('Email sent successfully!');
            console.log('Message ID:', info.messageId);
            res.json({ 'message': "Email sent successfully" });

        } catch (error) {
            console.error('Error occurred:', error.message);
            res.status(500).json({ 'message': 'Error sending mail, please try again' });
        }
    }

    sendEmail();
});

app.post('/autodialSubscriber', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const recievers_name = firstName + " " + lastName;
    const recievers_email = req.body.email;
    const recievers_phone = req.body.phone;
    const recievers_employees = req.body.employees;
    const recievers_users = req.body.users;
    const recievers_subscribe = req.body.subscribe;

    async function sendEmail() {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.zoho.in',
                port: 465,
                secure: true,
                auth: {
                    user: 'sales@theautodial.com',
                    pass: 'Passc0de@2014#TAD'
                },
                requireTLS: true
            });

            const mailOptionsToSubscriber = {
                from: 'sales@theautodial.com',
                to: `${recievers_email}`,
                subject: `${recievers_name}, Thanks for subscribing!`,
                html: html2
            };

            const mailOptionsToYou = {
                from: 'sales@theautodial.com',
                to: 'support@theautodial.com', // Replace with your email
                subject: `New Subscriber: ${recievers_name}`,
                text: `You have a new subscriber!\n\nName: ${recievers_name}\nEmail: ${recievers_email}\nPhone: ${recievers_phone}\nEmployees: ${recievers_employees}\nUsers: ${recievers_users}\nSubscribe: ${recievers_subscribe ? "Subscribed" : "Not Subscribed"}`
            };

            let infoSubscriber = await transporter.sendMail(mailOptionsToSubscriber);
            let infoYou = await transporter.sendMail(mailOptionsToYou);

            res.json({ 'message': "Emails sent successfully" });

        } catch (error) {
            console.error('Error occurred:', error.message);
            res.status(500).json({ 'message': 'Error sending mail, please try again' });
        }
    }

    sendEmail();
});
app.post('/autodialNewsletter', (req, res) => {
    const recievers_email = req.body.email;

    async function sendEmail() {
        try {
            const transporter = nodemailer.createTransport({
                host: 'smtp.zoho.in',
                port: 465,
                secure: true,
                auth: {
                    user: 'sales@theautodial.com',
                    pass: 'Passc0de@2014#TAD'
                },
                requireTLS: true
            });

            const mailOptionsToSubscriber = {
                from: 'sales@theautodial.com',
                to: `${recievers_email}`,
                subject: Thanks for subscribing!`,
                html: html2
            };

            const mailOptionsToYou = {
                from: 'sales@theautodial.com',
                to: 'support@theautodial.com', // Replace with your email
                subject: `New Subscriber: ${recievers_name}`,
                text: `You have a new subscriber! Email: ${recievers_email}`
            };

            let infoSubscriber = await transporter.sendMail(mailOptionsToSubscriber);
            let infoYou = await transporter.sendMail(mailOptionsToYou);

            res.json({ 'message': "Emails sent successfully" });

        } catch (error) {
            console.error('Error occurred:', error.message);
            res.status(500).json({ 'message': 'Error sending mail, please try again' });
        }
    }

    sendEmail();
});

// Ensure the server starts and listens for incoming requests
app.listen(7000, () => {
    console.log('Listening on port 7000');
});
