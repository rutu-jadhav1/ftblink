import React from 'react'
import { useEffect } from 'react'
import "./LinkCard.css"
import shortImg from './short.png'
import targetImg from './target.png'

function LinkCard({ title, slug, target, views, createdAt, loadLinks }) {

    const shortURL = `${process.env.REACT_APP_BACKEND_URL}/${slug}`
    
    useEffect(() => {
        loadLinks();
    }, [])

    return (
        <div className='link-card-container'>
            <h3 className='link-card-title '>{title || 'No Title'}</h3>
            <a href={shortURL} target='_blank' className='link-card-target url'>
                <img src={shortImg} alt='ShortURL' className='link-card-img' />{shortURL}
            </a>
            <a href={target} target='_blank' className='link-card-target'>
                <img src={targetImg} alt='TargetURL' className='link-card-img' />{target.substring(0, 50)}{target.length > 50 ? "..." : null}
            </a>

            <span className='link-card-view'>
                {views}
            </span>
            <span className='link-card-view-text'>
                {views > 0 ? `${views} people visited this URL` : 'Share URL to get view count'}
            </span><br/>
            <span className='link-card-date'>{new Date(createdAt).toLocaleString()}</span>
        </div>
    )
}

export default LinkCard