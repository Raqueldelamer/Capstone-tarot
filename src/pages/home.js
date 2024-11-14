import { useEffect, useState } from "react";
import CapstoneHeader from '@/components/capstone-header';
import MenuNav from '../components/menu-nav';

console.log("Welcome to my tarot app!");

export default function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchTarotData = async () => {
            try {
                const response = await fetch('/tarot-data.json');
                if (!response.ok) {
                    throw new Error("Failed to fetch tarot");
                }
                const data = await response.json();
                setCards(data);                     // update state w fetched data
            }   catch (error) {
                console.error("Error fetching tarot data:", error);
            }
        };

        fetchTarotData();
    }, []);

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
            <CapstoneHeader headerText="Welcome to my Capstone Tarot App!" />
            <div className="tarot-cards-container mt-25">
                {cards.length === 0 ? (
                    <p>Loading tarot...</p>
                ) : (
                    <div className=" grid grid-cols-1">
                        {cards.map((card, index) => ( <div key={index} className="card bg-black p-4 rounded shadow-lg">
                            <h2 className="text-l">{card.name}</h2>
                            <p>{card.meaning_up}</p>
                            <img src={card.image_link} alt={card.name} className="mt-2 rounded"
                            style={{ width: "100px", height: "auto" }} /> 
                            </div>
                        ))}
                        </div>
                )}
                </div>
            </div>
        </div>
    );
}