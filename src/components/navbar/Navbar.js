import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
//import InputField from './Input';
import Menu from './Menu';



function Navbar() {

    const [click,setClick]=useState(false);
    const handleClick = (e)=> {
        e.preventDefault();
        setClick(!click);
    }
    const closeMobileMenu = (e)=> {
        e.preventDefault();
        setClick(false);
    }

    return (
        <Menu/>
    )
}

export default Navbar;
