import PropTypes from 'prop-types';

// finished this component based on the design in
// public/mockups/header-menu.png
export default function MenuNav(props) {
    const {menuItems} = props;
    return (

    <div className=" text-yellow-500 text-center text-xl space-x-6 font-bold flex justify-end">
        <div><a href="/home" className='hover:text-yellow-200'>{menuItems[0]}</a></div>
        <div><a href="/about" className='hover:text-yellow-200'>{menuItems[1]}</a></div>
        <div><a href="/contact" className='hover:text-yellow-200'>{menuItems[2]}</a></div>
    </div>
    );
}

MenuNav.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};