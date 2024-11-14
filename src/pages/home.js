import { useEffect, useState } from "react";
import CapstoneHeader from '@/components/capstone-header';
import MenuNav from '../components/menu-nav';

console.log("Welcome to my tarot app!");

export default function HomePage() {
    const [card, setCard] = useState(null); 
    const [loading, setLoading] = useState(false); 

    const fetchTarotData = async () => {  // fetch tarot card data from API route
        
        setLoading(true); 
        
        try {
            const response = await fetch('/api/tarot'); 

            if (!response.ok) {
                throw new Error("failed to fetch tarot");
            }

            const data = await response.json();
            setCard(data);

        } catch (error) {
            console.error("Error fetching tarot data:", error);
        
        } finally {
            setLoading(false); 
        }
    };

    const divStyle = {
        backgroundImage: 'url(imgs/capstone-tarot-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'black',
    };

    return (
        <div style={divStyle}>
            <div className="text-yellow-500 py-2 px-10 justify-stretch">
                <MenuNav menuItems={["HOME", "ABOUT", "CONTACT"]} />
                <CapstoneHeader headerText="Welcome to my Capstone Tarot App!" />
                    <center><button onClick={fetchTarotData} className="bg-yellow-500 text-black mt-10 mx-auto font-bold px-5 py-2 rounded">
                            Click for Tarot Message
                        </button></center>

                        <div className="tarot-cards container-center px-52 mt-25 text-center">
                
                            {loading ? (
                            <p>Loading tarot...</p>
                            ) : card ? (
                        
                            <div className="card  bg-black p-4 rounded shadow-lg mt-4">
                            <h2 className="text-2xl">{card.name}</h2>
                            <center><img src={card.image} alt={card.name} className="mt-4 mb-3 rounded" style={{ width: "200px", height: "auto" }} /></center>
                            <p className="text-2xl">{card.meaning}</p>
                        </div>
                    ) : ( <p className="text-3xl font-bold">Click the button to fetch a card.</p>)
                    }
                </div>
            </div>
        </div>
    );
}