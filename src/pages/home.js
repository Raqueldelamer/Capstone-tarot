import { useEffect, useState } from "react";
import CapstoneHeader from '@/components/capstone-header';
import MenuNav from '../components/menu-nav';
import TarotIcon from "@/components/tarot-icon";

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
        backgroundColor: 'black',
        height: '100vh',
        color: 'black',
    };

    return (
        <div style={divStyle}>
            <div className="text-yellow-500 font-mono py-2 px-10 text-center justify-stretch">
                <MenuNav menuItems={["HOME", "ABOUT", "CONTACT"]} />
                <div className="flex container">
                <h3 className="text-lg ml-0 mt-4 flex text-yellow-200 hover:text-yellow-500"><TarotIcon />The Daily Tarot App!</h3>
                </div>
                <CapstoneHeader headerText="Welcome to my Capstone Tarot App!" />
                    <center><button onClick={fetchTarotData} className="bg-yellow-500 text-black mt-10 mx-auto font-serif font-bold px-5 
                    py-2 hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 rounded-lg ">
                            Click for your Tarot Message
                        </button></center>

                        <div className="max-w-lg ml-auto mr-auto justify-self-center items-center rounded-lg opacity-90 px-auto mt-25 text-center">
                
                            {loading ? (
                            <p>Loading tarot...</p>
                            ) : card ? (
                        
                            <div className="container bg-black p-4 justify-self-center rounded-lg shadow-lg mt-4">
                            <h2 className="text-2xl font-serif font-bold">{card.name}</h2>
                            <center><img src={card.image} alt={card.name} className="mt-3 mb-3 rounded opacity-100" style={{ width: "250px", height: "auto" }} /></center>
                            <p className="text-l text-yellow-200 font-mono">{card.meaning}</p>
                        </div>
                    ) : ( <p className="text-lg font-bold">. .</p>)
                    }
                </div>
            </div>
        </div>
    );
}