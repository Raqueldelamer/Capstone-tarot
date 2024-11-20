import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
const redis = Redis.fromEnv();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { user, email, subject, message } = req.body;  

        console.log('Received data:', { user, email, subject, message });

        const emailDetails = {
            from: 'onboarding@resend.dev',
            to: ['raqueldelamer@gmail.com'],
            email: email,  
            subject: subject,  
            html: `From: ${user} @ ${email} <p><strong>Message: ${message}</strong></p>`, 
        };

        try {
            await resend.emails.send(emailDetails); // Send the email using Resend API

            const contactData = { user, email, subject, message }; // Store the contact data in Redis
            await redis.rpush('contactFormSubmission', JSON.stringify(contactData));

            
            res.status(200).json({ message: "Email sent and data stored!" });
        } catch (error) {
            console.error("Error sending email:", error.response ? error.response.data : error);
            res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}