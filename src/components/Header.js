import React, { useState } from 'react';
import{motion} from "framer-motion";

const Header = ({ currentPage, handlePageChange, subHeader, setSubHeader }) => {

    const [sideNav, openSideNav] = useState(false);

    const handleSideNavFunctions = (changes) => {

        if (changes === "Portfolio") {
            handlePageChange("Portfolio")
        }

        if (changes === "About") {
            handlePageChange("About")
        }

        if (changes === "Contact") {
            handlePageChange("Contact")
        }

        openSideNav(!sideNav);
    }

    const currentSubHeader = (currentPage) => {

        if (currentPage === "Portfolio") {
            return (
                <div className="d-flex subHeader-container">
                    <p className="headerTextStyle">PORTFOLIO:</p>
                    <p className="buffer1"></p>
                    <motion.a initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 1}} className="textDectorationNone" href="#portfolio" onClick={() => setSubHeader('Websites')}><p className="subNavStyle">WEBSITES</p></motion.a>
                    <p className="buffer"> ⚫ </p>
                    <motion.a initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 1.5}} className="textDectorationNone" href="#portfolio" onClick={() => setSubHeader('Games')}><p className="subNavStyle">GAMES</p></motion.a>
                    <p className="buffer"> ⚫ </p>
                    <motion.a initial={{opacity: 0}} animate={{ opacity: 1 }} transition={{duration: 2}} 
                        className="textDectorationNone" href="https://github.com/syackzan" target="_blank" rel="noreferrer" onClick={() => setSubHeader('Games')}>
                        <p className="subNavStyle">GITHUB</p>
                    </motion.a>
                </div>
            )
        }

        if (currentPage === "About") {
            return (
                <div className="d-flex subHeader-container">
                    <p className="headerTextStyle">ABOUT:</p>
                    <p className="buffer1"></p>
                </div>
            )
        }

        if(currentPage === "Contact")
        {
            return(
                <div className="d-flex subHeader-container">
                    <p className="headerTextStyle">CONTACT:</p>
                    <p className="buffer1"></p>
                </div>
            )
        }

    }

    if (sideNav) {
        return (
            <div className="side-nav-overlay">
                <div className="side-nav-content">
                    <a className="closeSideNavStyle" href="#nav" onClick={() => openSideNav(!sideNav)}>X</a>
                    <a className="linksSideNavNoBorder" href="#nav" onClick={() => handleSideNavFunctions("Portfolio")}>PORTFOLIO</a>
                    <a className="linksSideNav" href="#nav" onClick={() => handleSideNavFunctions("About")}>ABOUT</a>
                    <a className="linksSideNav" href="#nav" onClick={() => handleSideNavFunctions("Contact")}>CONTACT</a>
                </div>
            </div>
        )
    }

    return (
        <div>
            <header className="headerStyle">
                <div className="full centerElement">
                    <p className="headerTextStyle">SCOTT YACKZAN</p>
                </div>
                <div className="full miniNav">
                    <div className="miniNavLinkAfull">
                        <a className="textDectorationNone miniNavStyle" href="#nav" onClick={() => openSideNav(!sideNav)}>☰</a>
                    </div>
                </div>
                <div className="full bigNav">
                    <div className="divLinksA full">
                        <a className="divLinksB full" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
                            <p className={currentPage === 'Portfolio' ? 'navStyle' : 'navStyle'}>PORTFOLIO</p>
                        </a>
                        <a className="divLinksB full" href="#about" onClick={() => handlePageChange('About')}>
                            <p className={currentPage === 'About' ? 'navStyle' : 'navStyle'}>ABOUT</p>
                        </a>
                        <a className="divLinksB full" href="#contact" onClick={() => handlePageChange('Contact')}>
                            <p className={currentPage === 'Contact' ? 'navStyle' : 'navStyle'}>CONTACT</p>
                        </a>
                    </div>
                </div>
            </header>
            <div className="bottomHeader">
                <div className="bottomHeader1">
                    {currentSubHeader(currentPage)}
                </div>
            </div>
        </div>
    )
}

export default Header;