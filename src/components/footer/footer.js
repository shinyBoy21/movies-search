import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className='footer' id='footer'>
            <div className='footer-icons'>
                <div className='footer-icons-icon'><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a></div>
                <div className='footer-icons-icon'><a href="https://www.twitter.fr" target="_blank"><i class="fab fa-twitter-square"></i></a></div>
                <div className='footer-icons-icon'><a href="https://www.facebook.com" target="_blank"><i class="fab fa-instagram-square"></i></a></div>
            </div>
            
            <div className='footer-copyright'>by shinyBoy21 &nbsp;&nbsp;&nbsp;&nbsp;&#169;2021</div>
         </footer> 

    )
}

export default Footer;
