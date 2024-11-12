import PropTypes from 'prop-types';

// finished this component based on the design in
// public/mockups/header-menu.png
export default function MenuNav(props) {
    const {menuItems} = props;
    return (

    <div className=" text-yellow-500 group-hover:text-white text-center text-l space-x-6 font-bold flex justify-end">
        <div><a href="/home" >{menuItems[0]}</a></div>
        <div><a href="/about">{menuItems[1]}</a></div>
        <div><a href="/contact">{menuItems[2]}</a></div>
    </div>
    );
}

MenuNav.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};