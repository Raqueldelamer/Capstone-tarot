import { useState } from "react";
import MenuNav from '../components/menu-nav';
import TarotIcon from "@/components/tarot-icon";


export default function ContactPage() {
    const [user, setUser] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    async function sendMail() {
        try {
            const response = await fetch(`/api/email?user=${user}&subject=${subject}&message=${message}`);
        
            if (response.ok) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Failed to send the message.");
            }
        } catch (error) {
            console.error("Error sending mail:", error);
            setStatus("An error occurred while sending the message.");
        }
    }
    
    function handleClick() {
        sendMail();
    }

    function changeHandler(event) {
        const input = event.target.value;
        console.log(event);
        setUser(input);
    }

    function messageChangeHandler(event) {
        console.log(event);
        const messageInput = event.target.value;
        setMessage(messageInput);
    }
    
    function subjectChangeHandler(event) {
        console.log(event);
        const subjectInput = event.target.value;
        setSubject(subjectInput);
    }

    const divStyle = {
        backgroundImage: 'url(imgs/capstone-tarot-bg.jpg)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '100vh', 
        color: 'black', 

    };

    return (
        <div style={divStyle}>
            <div className= "text-yellow-500 py-2 px-10 justify-stretch">
            <MenuNav menuItems={["HOME",  "ABOUT", "CONTACT"]} />
            <div className="flex container">
                <TarotIcon /><h3 className="ml-0 mt-0 font-mono hover:text-yellow-200">The Daily Tarot App!</h3>
            </div>
            




            </div>
            </div>

)
}