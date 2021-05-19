import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './Menu.scss';

function Menu() {
    const [click, setClick]=useState(false);
    const handleClick=()=> {
        setClick(!click);
    };

    return (
        <nav className='navbar'>
        
            <label htmlFor="toggle" className="navbar__toggle" onClick={handleClick}><i className={click?"fas fa-times":"fas fa-bars"}></i></label>
            <input type='checkbox' id="toggle" class="navbar__burger"/>

            <div class="navbar__icon">
				<Link className="navbar__icon--select active" to="/">Home</Link>
                <Link className="navbar__icon--select active" to="/movies">Movies</Link>
                <Link className="navbar__icon--select active" to="/series">Series</Link>			
			</div>
        </nav>
    )
}

export default Menu;
