import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

import './Home.css'

function Home() {
    const [linkData, setLinkData] = useState({
        title: "",
        target: "",
        slug: ""
    })

    const generateLink = async (req, res) => {
       
        if(!linkData.title || !linkData.target || !linkData.slug){
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
    return (
        <div>
            <p className='heading heading-style'>Shorten the Web, Simplify Your World</p>
            <p className='heading heading-style'>Shrink, Share, Succeed</p>
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
            <Toaster />
        </div>
    )
}

export default Home