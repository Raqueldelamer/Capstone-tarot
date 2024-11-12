async function getTarotData () {
    const apiUrl ="https://tarotapi.dev/api/v1/cards/random?n=1" //api_key entered
    const result = await fetch(apiUrl);
    const data = await result.json()
    return data;

}

export default async function handler(req, res) {
    const tarot = await getTarotData();
    console.log(nasa);
    res.status(200).json({
        name: tarot.name,
        suit: tarot.suit,
        meaning: tarot.meaning_up,
        meaning_reversed: tarot.meaning_rev,
        Description: tarot.desc,
    
    });
}