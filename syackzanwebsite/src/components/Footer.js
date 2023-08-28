import React from 'react';

const Footer = () => {

    return (
        <div className="footer">
            <ul className="nav nav-tabs">
                <li className='footer-links'>
                    <a className='navStyle' href="about" onClick="#">Github</a>
                </li>
                <li className='footer-links'>
                    <a className='navStyle' href="portfolio" onClick='#'>LinkedIn</a>
                </li>
                <li className='footer-links'>
                    <a className='navStyle' href="resume" onClick='#'>Other</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;