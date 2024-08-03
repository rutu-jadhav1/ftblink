import React, { useState } from 'react'
import './Home.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Home() {
    const [linkData, setLinkData] = useState({
        title: "",
        target: "",
        slug: ""
    })

    const generateLink = async (req, res) => {
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
            <h1 className='heading'>Shorten the Web, Simplify Your World</h1>
            <h2 className='heading'>Shrink, Share, Succeed</h2>
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
                    className='link-input'
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
                    className='link-input'
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
                    className='link-input'
                />

                <button type='button' className='link-btn' onClick={generateLink}>Generate</button>
            </form>
            <Toaster />
        </div>
    )
}

export default Home