import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import './Home.css'
import LinkCard from '../../components/LinkCard/LinkCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function Home() {
    const [title, setTitle] = useState('')
    const [target, setTarget] = useState('')
    const [slug, setSlug] = useState('')

    const [user, setUser] = useState('')
    const [userLink, setUserLink] = useState([])

    const generateLink = async () => {

        if (!title || !target || !slug) {
            toast.error("Please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/link`,
            { title, target, slug, user: user._id }
        )

        if (response.data.success) {
            toast.success("Link generated successfully....!");
            setTitle('')
            setSlug('')
            setTarget('')
        }
        else {
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))

        if (currentUser) {
            setUser(currentUser)
        }

        if (!currentUser) {
            window.location.href = '/login'
        }
    }, [])

    console.log(user._id)

    const loadLinks = async () => {
        if (!user || !user._id) {
            return
        }
        toast.loading("Loading all links....");
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/alllink?userId=${user._id}`);
        toast.dismiss();
        toast.success("All Link Fetched");
        setUserLink(response.data.data);
    }

    useEffect(() => {
        loadLinks();
    }, [user])

    return (
        <div>
            <Navbar />
            <p className='heading heading-style'>Shrink 🔗, Share🤝, Succeed✅</p>
            <div className='link-main-container'>
                <div>
                    <form className='link-form'>
                        <h2 className='text-style' style={{textAlign:'center'}}>Hello {user.fullName}👋</h2>
                        <h5 className='user-sub-heading text-style' style={{marginTop: '30px'}}> 🔗Generate your Short Link here</h5>
                        <input
                            type='text'
                            placeholder='Enter Title '
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            className='link-input text-style'
                        />

                        <input
                            type='text'
                            placeholder='Enter Target URL '
                            value={target}
                            onChange={(e) => {
                                setTarget(e.target.value)
                            }}
                            className='link-input text-style'
                        />
                        <input
                            type='text'
                            placeholder='Enter slug '
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value)
                            }}
                            className='link-input text-style'
                        />

                        <button type='button' className='link-btn text-style' onClick={generateLink}>Generate</button>
                    </form>
                </div>
                <div className='alllinks-container'>
                    <h2 style={{ textAlign: 'center' }}>My Links</h2>
                    {
                        userLink.map((link, i) => {
                            const { title, slug, target, views, createdAt } = link;
                            return <LinkCard key={i} title={title} slug={slug} target={target} views={views} createdAt={createdAt} loadLinks={loadLinks} />
                        })
                    }
                </div>
            </div>
            <Toaster />
            <Footer/>
        </div>
    )
}

export default Home