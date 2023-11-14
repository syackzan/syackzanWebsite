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
import rushv2 from '../assets/images/rushv2.png';
import { motion } from "framer-motion";

const Portfolio = ({ subHeader }) => {

    const [hoverRushV2, isHoveringRushV2 ] = useState(false);
    const [hoverGreenCycle, isHoveringGreenCycle] = useState(false);
    const [hoverOnTrack, isHoverOnTrack] = useState(false);
    const [hoverTechBlog, isHoverTechBlog] = useState(false);
    const [hoverDegen, isHoverDegen] = useState(false);
    const [hoverWDB, isHoverWDB] = useState(false);
    const [hoverWDS, isHoverWDS] = useState(false);
    const [hoverPWG, isHoverPWG] = useState(false);
    const [hoverNT, isHoverNT] = useState(false);
    const [hoverEC, isHoverEC] = useState(false);
    const [hoverTG, isHoverTG] = useState(false);
    const [hoverET, isHoverET] = useState(false);
    const [hoverSimpleShooter, isHoverSimpleShooter] = useState(false);
    const [hoverCryptRaider, isHoverCryptRaider] = useState(false);
    const [hoverObstacleAssault, isHoverObstacleAssault] = useState(false);
    const [hoverToonTanks, isHoverToonTanks] = useState(false);

    const handleHoverRushV2 = () => {
        isHoveringRushV2(true);
    }

    const handleUnhoverRushV2 = () => {
        isHoveringRushV2(false);
    }

    const handleHoverGreenCycle = () => {
        isHoveringGreenCycle(true);
    }

    const handleUnhoverGreenCycle = () => {
        isHoveringGreenCycle(false);
    }

    const handleHoverOnTrack = () => {
        isHoverOnTrack(true);
    }

    const handleUnhoverOnTrack = () => {
        isHoverOnTrack(false);
    }

    const handleHoverTechBlog = () => {
        isHoverTechBlog(true);
    }

    const handleUnhoverTechBlog = () => {
        isHoverTechBlog(false);
    }

    const handleHoverDegen = () => {
        isHoverDegen(true);
    }

    const handleUnhoverDegen = () => {
        isHoverDegen(false);
    }

    const handleHoverWDB = () => {
        isHoverWDB(true);
    }

    const handleUnhoverWDB = () => {
        isHoverWDB(false);
    }

    const handleHoverWDS = () => {
        isHoverWDS(true);
    }

    const handleUnhoverWDS = () => {
        isHoverWDS(false);
    }

    const handleHoverPWG = () => {
        isHoverPWG(true);
    }

    const handleUnhoverPWG = () => {
        isHoverPWG(false);
    }

    const handleHoverNT = () => {
        isHoverNT(true);
    }

    const handleUnhoverNT = () => {
        isHoverNT(false);
    }

    const handleHoverEC = () => {
        isHoverEC(true);
    }

    const handleUnhoverEC = () => {
        isHoverEC(false);
    }

    const handleHoverTG = () => {
        isHoverTG(true);
    }

    const handleUnhoverTG = () => {
        isHoverTG(false);
    }

    const handleHoverET = () => {
        isHoverET(true);
    }

    const handleUnhoverET = () => {
        isHoverET(false);
    }

    const handleHoverSimpleShooter = () => {
        isHoverSimpleShooter(true);
    }

    const handleUnhoverSimpleShooter = () => {
        isHoverSimpleShooter(false);
    }

    const handleHoverCryptRaider = () => {
        isHoverCryptRaider(true);
    }

    const handleUnhoverCryptRaider = () => {
        isHoverCryptRaider(false);
    }

    const handleHoverObstacleAssault = () => {
        isHoverObstacleAssault(true);
    }

    const handleUnhoverObstacleAssault = () => {
        isHoverObstacleAssault(false);
    }

    const handleHoverToonTanks = () => {
        isHoverToonTanks(true);
    }

    const handleUnhoverToonTanks = () => {
        isHoverToonTanks(false);
    }


    if (subHeader === "Websites") {
        return (
            <div>
                <div className='portfolioContainer'>
                <a href="https://www.rushv2.com/" onMouseEnter={handleHoverRushV2} onMouseLeave={handleUnhoverRushV2}
                      onTouchStart={handleHoverRushV2} onTouchEnd={handleUnhoverRushV2} className="square">
                        {hoverRushV2 === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">RUSHV2</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} whileHover={{ scale: 0.95 }}>
                                    <h2 class="thumb-title">RushV2: A website enabling peer to peer wagers.</h2>
                                    <div class="image-container">
                                        <img src={rushv2} loading="eager" alt="RushV2" />
                                    </div>
                                    <h3 class="thumb-subtitle">Built with MERN Stack</h3>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://mighty-headland-87510.herokuapp.com/" onMouseEnter={handleHoverGreenCycle} onMouseLeave={handleUnhoverGreenCycle}
                      onTouchStart={handleHoverGreenCycle} onTouchEnd={handleUnhoverGreenCycle} className="square">
                        {hoverGreenCycle === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">GREEN CYCLE</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} whileHover={{ scale: 0.95 }}>
                                    <h2 class="thumb-title">Green Cycle: A website built to track waste on a Construction Job.</h2>
                                    <div class="image-container">
                                        <img src={greenCycle} loading="eager" alt="GreenCycle" />
                                    </div>
                                    <h3 class="thumb-subtitle">Built with MERN Stack</h3>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://sheltered-lake-23144.herokuapp.com/" onMouseEnter={handleHoverOnTrack} onMouseLeave={handleUnhoverOnTrack} 
                    onTouchStart={handleHoverOnTrack} onTouchEnd={handleUnhoverOnTrack} className="square">
                        {hoverOnTrack === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">ONTRACK</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h2 class="thumb-title">onTrack: A website built to track scope & schedule on a Construction job.</h2>
                                    <div class="image-container">
                                        <img src={onTrack} loading="eager" alt="onTrack" />
                                    </div>
                                    <h3 class="thumb-subtitle">Built with Javascript and MySQL</h3>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://cryptic-sands-14911.herokuapp.com/" onMouseEnter={handleHoverTechBlog} onMouseLeave={handleUnhoverTechBlog} 
                    onTouchStart={handleHoverTechBlog} onTouchEnd={handleUnhoverTechBlog} className="square">
                        {hoverTechBlog === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">TECH BLOG</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Tech Blog: A website built link up with like minded coders.</h1>
                                    <div class="image-container">
                                        <img src={techBlog} loading="eager" alt="TechBlog" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with Javascript and MySQL</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.github.io/The-Degenerate/" onMouseEnter={handleHoverDegen} onMouseLeave={handleUnhoverDegen} 
                    onTouchStart={handleHoverDegen} onTouchEnd={handleUnhoverDegen} className="square">
                        {hoverDegen === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">THE DEGENERATE</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">The Degenerate: A place for gamblers to find quick odds.</h1>
                                    <div class="image-container">
                                        <img src={theDegenerate} loading="eager" alt="Degen" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with HTML, CSS, and JS</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.github.io/Weather-Dashboard/" onMouseEnter={handleHoverWDB} onMouseLeave={handleUnhoverWDB} 
                    onTouchStart={handleHoverWDB} onTouchEnd={handleUnhoverWDB} className="square">
                        {hoverWDB === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">WEATHER DASHBOARD</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Weather Dashboard: A website built to know the forecast.</h1>
                                    <div class="image-container">
                                        <img src={weatherDashboard} loading="eager" alt="WeatherDashboard" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with HTML, CSS, and JS</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.github.io/Day-Calendar/" onMouseEnter={handleHoverWDS} onMouseLeave={handleUnhoverWDS} 
                    onTouchStart={handleHoverWDS} onTouchEnd={handleUnhoverWDS} className="square">
                        {hoverWDS === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">DAILY SCHEDULER</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Day Planner: A website built to help organize your day.</h1>
                                    <div class="image-container">
                                        <img src={dayPlanner} loading="eager" alt="Scheduler" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with HTML, CSS, and JS</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.github.io/Code-Generator-v1/" onMouseEnter={handleHoverPWG} onMouseLeave={handleUnhoverPWG} 
                    onTouchStart={handleHoverPWG} onTouchEnd={handleUnhoverPWG} className="square">
                        {hoverPWG === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">CODE GENERATOR</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Code Generator: A website built to help you generate a password.</h1>
                                    <div class="image-container">
                                        <img src={codeGenerator} loading="eager" alt="CG" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with HTML, CSS, and JS</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://guarded-retreat-79950.herokuapp.com/" onMouseEnter={handleHoverNT} onMouseLeave={handleUnhoverNT} 
                    onTouchStart={handleHoverNT} onTouchEnd={handleUnhoverNT} className="square">
                        {hoverNT === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">NOTE TAKER</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Note Take: A website to help you take notes and remember ideas.</h1>
                                    <div class="image-container">
                                        <img src={noteTaker} loading="eager" alt="notetaker" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with HTML, CSS, and JS</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://www.youtube.com/watch?v=7UEdc37f40I" onMouseEnter={handleHoverEC} onMouseLeave={handleUnhoverEC} 
                    onTouchStart={handleHoverEC} onTouchEnd={handleUnhoverEC} className="square">
                        {hoverEC === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">E-COMMERCE</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">E-Commerce Backend: Database to store information about products.</h1>
                                    <div class="image-container">
                                        <img src={ecommerce} loading="eager" alt="ecommerce" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with node.js</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://www.youtube.com/watch?v=KaOJYunXeBo" onMouseEnter={handleHoverTG} onMouseLeave={handleUnhoverTG} 
                    onTouchStart={handleHoverTG} onTouchEnd={handleUnhoverTG} className="square">
                        {hoverTG === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">TEAM GENERATOR</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Team Generator Backend: Database to store user information.</h1>
                                    <div class="image-container">
                                        <img src={teamGenerator} loading="eager" alt="teamgenerator" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with node.js</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://www.youtube.com/watch?v=cC1MKmIArhY" onMouseEnter={handleHoverET} onMouseLeave={handleUnhoverET} 
                    onTouchStart={handleHoverET} onTouchEnd={handleUnhoverET} className="square">
                        {hoverET === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">EMPLOYEE TRACKER</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Employee Tracker Backend: Database to store employee information.</h1>
                                    <div class="image-container">
                                        <img src={employeedTracker} loading="eager" alt="employeetracker" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with node.js</h2>
                                </motion.div>
                            )}
                    </a>
                </div>
            </div>
        )
    }

    if (subHeader === "Games") {
        return (
            <div>
                <div className='portfolioContainer'>
                    <a href="https://syackzan.itch.io/chained-reaction" onMouseEnter={handleHoverSimpleShooter} onMouseLeave={handleUnhoverSimpleShooter} 
                    onTouchStart={handleHoverSimpleShooter} onTouchEnd={handleUnhoverSimpleShooter}className="square">
                        {hoverSimpleShooter === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">Chained Reaction</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Chained Reaction: Take control of the phantom to survive the enemy onslaught!</h1>
                                    <div class="image-container">
                                        <img src={simpleShooter} loading="eager" alt="SimpleShooter" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built Unreal Engine 5</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.itch.io/crypt-raider" onMouseEnter={handleHoverCryptRaider} onMouseLeave={handleUnhoverCryptRaider} 
                    onTouchStart={handleHoverCryptRaider} onTouchEnd={handleUnhoverCryptRaider}className="square">
                        {hoverCryptRaider === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">CRYPT RAIDER</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Crypt Raider: Discover the lost treasure of The Crypt!</h1>
                                    <div class="image-container">
                                        <img src={cryptRaider} loading="eager" alt="CryptRaider" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with Unreal Engine 5</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.itch.io/toon-tanks-ue5" onMouseEnter={handleHoverToonTanks} onMouseLeave={handleUnhoverToonTanks} 
                    onTouchStart={handleHoverToonTanks} onTouchEnd={handleUnhoverToonTanks}className="square">
                        {hoverToonTanks === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">TOON TANKS</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Toon Tanks: Take control of a Tank to destroy the enemy towers!</h1>
                                    <div class="image-container">
                                        <img src={toonTanks} loading="eager" alt="toontanks" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built Unreal Engine 5</h2>
                                </motion.div>
                            )}
                    </a>
                    <a href="https://syackzan.itch.io/obstacle-assault" onMouseEnter={handleHoverObstacleAssault} onMouseLeave={handleUnhoverObstacleAssault} 
                    onTouchStart={handleHoverObstacleAssault} onTouchEnd={handleUnhoverObstacleAssault} className="square">
                        {hoverObstacleAssault === false ? (
                            <motion.div class="fakeThumbnail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.0 }}>
                                <h1 class="">OBSTACLE ASSAULT</h1>
                            </motion.div>
                        ) :
                            (
                                <motion.div class="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 0.95 }}>
                                    <h1 class="thumb-title">Obstacle Assault: Move across the puzzle platform to find the finish line!</h1>
                                    <div class="image-container">
                                        <img src={obstacleAssault} loading="eager" alt="obstacleassault" />
                                    </div>
                                    <h2 class="thumb-subtitle">Built with Unreal Engine 5</h2>
                                </motion.div>
                            )}
                    </a>
                </div>
            </div>
        )
    }


}

export default Portfolio;