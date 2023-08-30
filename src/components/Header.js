import React, {useState} from 'react';

const Header = ({currentPage, handlePageChange, subHeader, setSubHeader}) => {

    

    const currentSubHeader = (currentPage) => {

        if(currentPage == "Portfolio")
        {
            return(
                <div className="d-flex">
                    <p className="headerTextStyle">PORTFOLIO:</p>
                    <p className="buffer1"></p>
                    <a className="textDectorationNone" href="#portfolio" onClick={() => setSubHeader('Websites')}><p className="subNavStyle">WEBSITES</p></a>
                    <p className="buffer"> || </p>
                    <a className="textDectorationNone" href="#portfolio" onClick={() => setSubHeader('Games')}><p className="subNavStyle">GAMES</p></a>
                </div>
            )
        }
        
    }

    return(
        <div>
            <header className="headerStyle">
                <div className="full centerElement onHover">
                    <p className="headerTextStyle">SCOTT YACKZAN</p>
                </div>
                <div className="d-flex full">
                    <div className="divLinksA full">
                        <a className="divLinksB full" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
                            <p className={currentPage === 'Portfolio' ? 'navStyle' : 'navStyle'}>PORTFOLIO</p>
                        </a>
                        <a className="divLinksB full" href="#about" onClick={() => handlePageChange('About')}>
                            <p className={currentPage === 'About' ? 'navStyle' : 'navStyle'}>ABOUT ME</p>
                        </a>
                        <a className="divLinksB full" href="#contact" onClick={() => handlePageChange('Contact')}>
                            <p className={currentPage === 'Contact' ? 'navStyle' : 'navStyle'}>CONTACT</p>
                        </a>
                    </div>
                </div>
            </header>
            <div className="bottomHeader">
                <div className="col-6 full centerElement">
                    {currentSubHeader(currentPage)}
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    )
}

export default Header;