import React from 'react';
import { motion } from "framer-motion";

const AboutMe = () => {

    return (
        <div className="BG paper-container">
            <div className="d-flex">
                <p className="bulletPointBlock">⚫</p>
                <h1 className="aboutHeaders">BACKGROUND</h1>
            </div>
            <div className="d-flex">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                    <p className="lineBetween"></p>
                </motion.div>
                <div>
                    <p>My name is Scotty Yackzan, and I am a passionate Full Stack Web and Game Developer.
                        Despite discovering my enthusiasm for programming later in life, my dedication is
                        unwavering. The past several years have been a continuous programming journey, during which
                        I've acquired a comprehensive understanding of Software Development. Whether you're seeking assistance
                        in launching a full-scale website or building and designing a new game, I am here to provide my expertise.
                        While I possess multiple strengths, I acknowledge that the programming landscape is dynamic and rapidly
                        evolving. Please refer to my highlighted strengths below along with my portfolio to see if I am the right fit for your
                        next project.
                    </p>
                    <div className="spacer"></div>
                </div>
            </div>
            <div className="d-flex">
                <p className="bulletPointBlock">⚫</p>
                <h2 className="aboutHeaders">LANGUAGES</h2>
            </div>
            <div className="d-flex">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                    <p className="lineBetween"></p>
                </motion.div>
                <div>
                    <p>C++, Javascript, Python, JSON</p>
                    <div className="spacer"></div>
                </div>
            </div>
            <div className="d-flex">
                <p className="bulletPointBlock">⚫</p>
                <h3 className="aboutHeaders">FRAMEWORKS</h3>
            </div>
            <div className="d-flex">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
                    <p className="lineBetween"></p>
                </motion.div>
                <div>
                    <p>
                        Node.js, NoSql, MongoDB, Express, Heroku, Apollo Server Express, Graphql, JW Tokens, Bootstrap, Framer-Motion, various npm packages++.
                    </p>
                    <div className="spacer"></div>
                </div>
            </div>
            <div className="d-flex">
                <p className="bulletPointBlock">⚫</p>
                <h4 className="aboutHeaders">ENGINES</h4>
            </div>
            <div className="d-flex">
                <p className=""></p>
                <div>
                    <p>Unreal Engine 4, Unreal Engine 5</p>
                    <div className="spacer"></div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe;