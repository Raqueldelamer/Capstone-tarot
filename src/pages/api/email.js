import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res) {

    const { user, emailAddress, subject, message } = req.query;

    console.log(user);
    console.log(emailAddress);
    console.log(subject);
    console.log(message);
    console.log('Received data:', req.query);

    const email = {
        
        from: 'onboarding@resend.dev',
        to: ['raqueldelamer@gmail.com'],
        email: `${emailAddress}`,
        subject: `${subject}`,
        html: `From: ${user} @ ${emailAddress} <p><strong>Message: ${message}</strong>!</p>`,
    
    }
    
    try {
        await resend.emails.send(email);
        res.status(200).json({ message: "Email sent!" });

        
    } catch(error) {
            
        console.error("Error sending email:", error.response ? error.response.data : error);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    
}