import React, {useState} from 'react';
import onTrack from '../assets/images/onTrack.png';

const Portfolio = () => {

    const [falling, setFalling] = useState(false);

    return(
        <div>
            {/* <button onClick={handleDestroyClick}>Destroy</button> */}
            <div className={`portfolioContainer ${falling ? `falling` : ``} `}>
                {/* <section class="header1">
                <h2 className="headerColor"><u>Full Stack Programs</u></h2>
            </section> */}
                <a href="https://sheltered-lake-23144.herokuapp.com/" className={`square ${falling ? 'falling' : ''}`}>
                    <div class="content">
                        <h1 class="thumb-title">ON TRACK</h1>
                        <div class="image-container">
                            <img src={onTrack} alt="Image" />
                        </div>
                        <h2 class="thumb-subtitle">NOSQL database</h2>
                    </div>
                </a>
                <div className="square">
                    {/* <div className="">
                        <a href="https://cryptic-sands-14911.herokuapp.com/"
                            className="navStyle">
                            <section className="mainBorder formatSection">
                                <img className="formatImage" src={techBlog} alt="techBlog Image" />
                                <h2 className="formatHeader">Tech Blog</h2>
                            </section>
                        </a>
                    </div> */}
                </div>
                <div className="square">
                    {/* <div className="">
                        <a href="https://cryptic-sands-14911.herokuapp.com/"
                            className="navStyle">
                            <section className="mainBorder formatSection">
                                <img className="formatImage" src={techBlog} alt="techBlog Image" />
                                <h2 className="formatHeader">Tech Blog</h2>
                            </section>
                        </a>
                    </div> */}
                </div>
                <div className="square">
                    {/* <div className="">
                        <a href="https://cryptic-sands-14911.herokuapp.com/"
                            className="navStyle">
                            <section className="mainBorder formatSection">
                                <img className="formatImage" src={techBlog} alt="techBlog Image" />
                                <h2 className="formatHeader">Tech Blog</h2>
                            </section>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;