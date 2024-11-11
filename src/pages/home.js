import CapstoneHeader from '@/components/capstone-header';
import MenuNav from '../components/menu-nav';


export default function HomePage() {
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
        
        </div>
        </div>
    );
}