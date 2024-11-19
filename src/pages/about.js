import AboutHeader from '../components/about-header';
import MenuNav from '../components/menu-nav';
import TarotIcon from '@/components/tarot-icon';


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
            <div className="flex container">
                <TarotIcon /><h3 className="ml-0 mt-0 font-mono hover:text-yellow-200">The Daily Tarot App!</h3>
            </div>
            <AboutHeader headerText="ABOUT" />
        
            <div className="max-w-5xl text-yellow-200 text-xl justify-self-center items-center round opacity-90 px-auto mt-25 text-wrap bg-black p-4 rounded shadow-lg mt-4">
                <div className="card">
    
                <p>For my Tarot Capstone project, I designed an interactive tarot card experience that features a one-card spread, 
                    an informative About page, and a Contact page with a form that sends messages via a secure API endpoint. The project’s 
                    main goal is to provide users with a seamless and engaging tarot reading experience while also allowing them to reach 
                    out through the contact form.
                    <br />
                    <br />
                    The project began by creating a `tarot-data.json` file, which contains detailed information about each of 
                    the 22 major arcana cards from the Ryder-Waite tarot deck. Since the tarot API I initially planned to use 
                    did not offer image URLs, I decided to build this file myself, including both tarot card images and brief 
                    yet insightful card interpretations.  
                    <br />
                    <br />
                    On the Home page, I use an API endpoint (`api/tarot.js`) to fetch the tarot data locally and display it when
                    users click a "Fetch Tarot Data" button. This dynamic functionality enriches the user experience by presenting 
                    detailed information about each card, along with its image, in a smooth and intuitive interface.
                    <br />
                    <br />
                    To enhance the visual appeal and interactivity, I utilized **Tailwind CSS** and Storybook to style key components of the app, such 
                    as the navigation menu, the fetch button, the headers, and a customized Tarot App Icon that I created with <a className="hover:text-yellow-500 font-bold" href="https://iconify.design" target="_blank">iconify.design</a>. 
                    The result is a modern, responsive design that is both aesthetically pleasing and easy to navigate..</p>
                </div>
            </div>
        </div>
    </div>
    
    )
}
