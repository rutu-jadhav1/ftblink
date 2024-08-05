import React from 'react'
import "./LinkCard.css"

function LinkCard({ title, slug, target, views, createdAt }) {
    return (
        <div className='link-card-container'>
            <h3 className='link-card-title'>{title}</h3>
            <p className='link-card-target'>
                <a href=''>{slug}</a>
            </p>
            <p className='link-card-target'>
                <a href={target} target='_blank' className='link-card-target'>
                    {target.substring(0, 50)}{target.length > 50 ? "..." : null}
                </a>
            </p>
            <span className='link-card-view'>{views}</span><br />
            <span className='link-card-date'>{new Date(createdAt).toLocaleString()}</span>
        </div>
    )
}

export default LinkCard