import React from 'react'
import './ContactUs.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function ContactUs() {
    return (
        <div >
            <Navbar />
            <h2 className='heading-style' style={{textAlign:'center',marginTop:'-20px',marginBottom:'20px'}}>Contact Us</h2>
            <div className='contact-container'>
                <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.4021486357856!2d75.00110367494639!3d17.86663978310457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc47519cc3f7417%3A0x8ad3fa24d7947a8!2sShiv%20Parvati%20Temple!5e0!3m2!1sen!2sin!4v1723004354319!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div >
                <form className='contact-form'>
                        <h2 className='text-style' style={{textAlign:'center'}}>Hello User👋</h2>
                        <h5 className='user-sub-heading text-style' style={{marginTop: '30px',textAlign:'center'}}>ShortenMe Related any Questions ? </h5>
                        <input
                            type='text'
                            placeholder='Enter Name '                           
                            className='link-input text-style'
                        />

                        <input
                            type='text'
                            placeholder='Enter Number '
                            
                            className='link-input text-style'
                        />
                        <input
                            type='text'
                            placeholder='Enter your Email-id '                           
                            className='link-input text-style'
                        />
                        <textarea
                        placeholder='Enter your message '                           
                            className='link-input text-style'
                        />

                        <button type='button' className='contact-btn text-style' >Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs