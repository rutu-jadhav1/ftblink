import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import './Home.css'
import LinkCard from '../../components/LinkCard/LinkCard'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
    const [linkData, setLinkData] = useState({
        title: "",
        target: "",
        slug: ""
    })

    const generateLink = async (req, res) => {

        if (!linkData.title || !linkData.target || !linkData.slug) {
            toast.error("Please Enter all details")
            return
        }
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/link`, linkData)

        if (response.data.success) {
            toast.success("Link generated successfully....!");
            setLinkData({
                title: "",
                target: "",
                slug: ""
            })
        }
        else {
            toast.error(response.data.message);
        }
    }

    const [userLink, setUserLink] = useState([])

    const loadLinks = async (req,res)=>{
        toast.loading("Loading all links....");
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/alllink`);
        toast.dismiss();
        toast.success("All Link Fetched");
        setUserLink(response.data.data);
    }

    useEffect(()=>{
        loadLinks();
    },[])
    return (
        <div>
            <Navbar/>
            <p className='heading heading-style'>Shorten the Web, Simplify Your World</p>
            <p className='heading heading-style'>Shrink, Share, Succeed</p>
            <div className='link-main-container'>
                <div>
                    <form className='link-form'>
                        <input
                            type='text'
                            placeholder='Enter Title '
                            value={linkData.title}
                            onChange={(e) => {
                                setLinkData({
                                    ...linkData,
                                    title: e.target.value
                                })
                            }}
                            className='link-input text-style'
                        />

                        <input
                            type='text'
                            placeholder='Enter Target URL '
                            value={linkData.target}
                            onChange={(e) => {
                                setLinkData({
                                    ...linkData,
                                    target: e.target.value
                                })
                            }}
                            className='link-input text-style'
                        />
                        <input
                            type='text'
                            placeholder='Enter slug '
                            value={linkData.slug}
                            onChange={(e) => {
                                setLinkData({
                                    ...linkData,
                                    slug: e.target.value
                                })
                            }}
                            className='link-input text-style'
                        />

                        <button type='button' className='link-btn text-style' onClick={generateLink}>Generate</button>
                    </form>
                </div>
                <div className='alllinks-container'>
                    <h2 style={{textAlign: 'center'}}>My Links</h2>
                    {
                        userLink.map((link , i)=>{
                            const {title,slug,target,views,createdAt} = link;
                            return <LinkCard key={i} title={title} slug={slug} target={target} views={views} createdAt={createdAt}/>
                        })
                    }
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Home