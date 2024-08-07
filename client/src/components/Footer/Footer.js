import React from 'react'
import './Footer.css'
import call from './phone.png'
import mail from './email.png'
import map from './map.png'
import link from './broken-link.png'

function Footer() {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    <img src={link} alt='call-img' height={'27px'} />
                    ShortenMe
                </div>
                <div className="card-body">
                    <h5 className="card-title">Shrink, Share, Succeed</h5>
                    <p className="card-text">Shorten the Web, Simplify Your World.</p>
                    <a href="mailto: 0103rutujajadhav@gmail.com" className="footer-contact footer-mail">
                        <img src={mail} alt='mail-img' height={'30px'} />  0103rutujajadhav@gmail.com
                    </a>
                    <a href="tel: 9322484363" className="footer-contact footer-contact-call">
                        <img src={call} alt='call-img' height={'30px'} />  9322484363
                    </a>
                    <a href="#" className="footer-contact footer-contact-text">
                        <img src={map} alt='map-img' height={'30px'} /> Contact Us
                    </a>
                </div>
                <div className="card-footer text-body-secondary">
                    © 2024 ShortenMe. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer