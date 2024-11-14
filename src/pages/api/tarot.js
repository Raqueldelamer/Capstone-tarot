import path from 'path';
import fs from 'fs';

async function getTarotData() {
    
    const filePath = path.resolve('tarot-data.json'); 

    try {

        const fileData = fs.readFileSync(filePath, 'utf8'); 
        const data = JSON.parse(fileData); 

        // Check if cards array exists and contains data
        if (!data.cards || data.cards.length === 0) {
            throw new Error("No tarot available.");
        }

        const randomCard = data.cards[Math.floor(Math.random() * data.cards.length)]; // Get a random card from the array

        return randomCard;
        
    } catch (error) {
        console.error("Error reading tarot data:", error);
        return null; // Return null in case of an error
    }
}

export default async function handler(req, res) {
    const tarot = await getTarotData(); 

    if (tarot) {

        res.status(200).json({
            name: tarot.name,
            image: tarot.image_link,
            meaning: tarot.meaning_up,
        });
    } else {

        res.status(500).json({ error: "Failed to fetch tarot data" });
    }
}

