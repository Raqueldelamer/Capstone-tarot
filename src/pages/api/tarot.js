import path from 'path';
import fs from 'fs';

async function getTarotData() {
    const filePath = path.resolved('./public/tarot-data.json');

    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileData);

        const randomCard = data[Math.floor(Math.random() * data.length)];

        return randomCard;

    } catch (error) {
        console.error("Oops! Error reading data:", error);
        return null;
    }
}

export default async function handler(req, res) {
    const tarot = await getTarotData(); // Fetch tarot data using the function

    if (tarot) {

        res.status(200).json({
            name: tarot.name,
            image: tarot.image_link,
            meaning: tarot.meaning_up,
            description: tarot.desc,
        });
    } else {
        
        res.status(500).json({ error: "Failed to fetch tarot data" }); // error response
    }
}

