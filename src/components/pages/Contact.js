import React from 'react';

const Contact = () => {

    return (
        <div class="business-card">
            <div class="contact-info">
                <div className="d-flex justify-content-center">
                    <p className="emailText">EMAIL: </p>
                    <a class="emailLink" href="mailto:syackzan@gmail.com">syackzan@gmail.com</a>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="emailText">LINKEDIN: </p>
                    <a class="emailLink" href="https://www.linkedin.com/in/scotty-yackzan-1427b335" target="_blank">https://www.linkedin.com/in/scotty...</a>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="emailText">ITCH: </p>
                    <a class="emailLink" href="https://syackzan.itch.io/" target="_blank">https://syackzan.itch.io/</a>                
                </div>
            </div>
        </div>
    )
}

export default Contact;