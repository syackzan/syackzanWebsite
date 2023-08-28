import React from 'react';

const Header = ({currentPage, handlePageChange}) => {

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
                    <p className="headerTextStyle">PORTFOLIO</p>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    )
}

export default Header;