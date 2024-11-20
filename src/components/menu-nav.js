import Link from 'next/link';
import PropTypes from 'prop-types';

// finished this component based on the design in
// public/mockups/header-menu.png
export default function MenuNav(props) {
    const {menuItems} = props;
    return (

    <div className=" text-yellow-500 text-center font-mono text-xl space-x-6 flex justify-end">
        <div><Link href="/home" className='hover:text-yellow-200'>{menuItems[0]}</Link></div>
        <div><Link href="/about" className='hover:text-yellow-200'>{menuItems[1]}</Link></div>
        <div><Link href="/contact" className='hover:text-yellow-200'>{menuItems[2]}</Link></div>
    </div>
    );
}

MenuNav.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};