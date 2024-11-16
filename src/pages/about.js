import AboutHeader from '../components/about-header';
import MenuNav from '../components/menu-nav';


export default function AboutPage() {
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
            <AboutHeader headerText="ABOUT" />
        
            <div className="tarot-cards max-w-5xl text-2xl justify-self-center items-center round opacity-90 px-48 mt-25 text-center card  bg-black p-4 rounded shadow-lg mt-4">
                <div className="card">
    
                <p>My Tarot Capstone project focuses on creating an interactive tarot card experience. The core of the project involved 
                    generating a 'tarot-data.json' file, which contains extensive data on each of the 22 major arcana tarot cards of the Ryder-Waite tarot deck.
                    The tarot API I initially planned to use does not provide image URLs, which led me to create a tarot-data.json with more informative tarot 
                    card interpretations and search for an alternative API that contains only images of the cards for a richer and more informative tarot app. 
                    The data and the images are fetched locally via a fetch tarot data button and displayed on the HomePage, enhancing the user experience with information about each card and 
                    a message .
                    <br />
                    <br />
                    To improve the visual and interactive aspects, I utilized Tailwind CSS to style the fetch button, the 
                    navigation and header components, creating a sleek and modern interface.</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}
