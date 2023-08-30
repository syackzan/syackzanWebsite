import React, { useState } from 'react';
import onTrack from '../assets/images/onTrack.png';
import techBlog from '../assets/images/techblog.png';
import greenCycle from '../assets/images/greenCycle.png';
import theDegenerate from '../assets/images/gambler.png';
import weatherDashboard from '../assets/images/weatherDB.png';
import dayPlanner from '../assets/images/dayPlanner.png';
import codeGenerator from '../assets/images/codeGenerator.png';
import noteTaker from '../assets/images/notetaker.png';
import ecommerce from '../assets/images/ecommerce.png';
import employeedTracker from '../assets/images/employeetracker.png';
import teamGenerator from '../assets/images/teamprofile.png';
import simpleShooter from '../assets/images/simpleshooter.png';
import cryptRaider from '../assets/images/cryptraider.png';
import toonTanks from '../assets/images/toontanks.png';
import obstacleAssault from '../assets/images/obstacleassault.png';

const Portfolio = ({ subHeader }) => {

    const [falling, setFalling] = useState(false);


    if (subHeader == "Websites") {
        return (
            <div>
                {/* <button onClick={handleDestroyClick}>Destroy</button> */}
                <div className='portfolioContainer'>
                    {/* <section class="header1">
                    <h2 className="headerColor"><u>Full Stack Programs</u></h2>
                </section> */}
                    <a href="https://mighty-headland-87510.herokuapp.com/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">GREEN CYCLE</h1>
                            <div class="image-container">
                                <img src={greenCycle} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Full stack</h2>
                        </div>
                    </a>
                    <a href="https://sheltered-lake-23144.herokuapp.com/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">ON TRACK</h1>
                            <div class="image-container">
                                <img src={onTrack} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Full stack</h2>
                        </div>
                    </a>
                    <a href="https://cryptic-sands-14911.herokuapp.com/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">TECH BLOG</h1>
                            <div class="image-container">
                                <img src={techBlog} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Full stack</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.github.io/The-Degenerate/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">THE DEGENERATE</h1>
                            <div class="image-container">
                                <img src={theDegenerate} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Front End</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.github.io/Weather-Dashboard/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">WEATHER DASHBOARD</h1>
                            <div class="image-container">
                                <img src={weatherDashboard} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Front End</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.github.io/Day-Calendar/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">DAY PLANNER</h1>
                            <div class="image-container">
                                <img src={dayPlanner} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Front End</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.github.io/Code-Generator-v1/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">CODE GENERATOR</h1>
                            <div class="image-container">
                                <img src={codeGenerator} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Front End</h2>
                        </div>
                    </a>
                    <a href="https://guarded-retreat-79950.herokuapp.com/" className="square">
                        <div class="content">
                            <h1 class="thumb-title">NOTE TAKER</h1>
                            <div class="image-container">
                                <img src={noteTaker} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Front End</h2>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=7UEdc37f40I" className="square">
                        <div class="content">
                            <h1 class="thumb-title">E-COMMERCE BACKEND</h1>
                            <div class="image-container">
                                <img src={ecommerce} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Back End</h2>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=KaOJYunXeBo" className="square">
                        <div class="content">
                            <h1 class="thumb-title">TEAM GENERATOR</h1>
                            <div class="image-container">
                                <img src={teamGenerator} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Backend</h2>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/watch?v=cC1MKmIArhY" className="square">
                        <div class="content">
                            <h1 class="thumb-title">EMPLOYEE TRACKER</h1>
                            <div class="image-container">
                                <img src={employeedTracker} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Backend</h2>
                        </div>
                    </a>
                </div>
            </div>
        )
    }

    if (subHeader == "Games") {
        return (
            <div>
                {/* <button onClick={handleDestroyClick}>Destroy</button> */}
                <div className='portfolioContainer'>
                    {/* <section class="header1">
                        <h2 className="headerColor"><u>Full Stack Programs</u></h2>
                    </section> */}
                    <a href="https://syackzan.itch.io/simple-shooter" className="square">
                        <div class="content">
                            <h1 class="thumb-title">SIMPLE SHOOTER</h1>
                            <div class="image-container">
                                <img src={simpleShooter} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Unreal Engine 5</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.itch.io/crypt-raider" className="square">
                        <div class="content">
                            <h1 class="thumb-title">Crypt Raider</h1>
                            <div class="image-container">
                                <img src={cryptRaider} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Unreal Engine 5</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.itch.io/toon-tanks-ue5" className="square">
                        <div class="content">
                            <h1 class="thumb-title">Toon Tanks</h1>
                            <div class="image-container">
                                <img src={toonTanks} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Unreal Engine 5</h2>
                        </div>
                    </a>
                    <a href="https://syackzan.itch.io/obstacle-assault" className="square">
                        <div class="content">
                            <h1 class="thumb-title">Obstacle Assault</h1>
                            <div class="image-container">
                                <img src={obstacleAssault} alt="Image" />
                            </div>
                            <h2 class="thumb-subtitle">Unreal Engine 5</h2>
                        </div>
                    </a>
                </div>
            </div>
        )
    }


}

export default Portfolio;