import React from 'react'
import "./LinkCard.css"

function LinkCard({title,slug,target,views,createdAt}) {
  return (
    <div>
        {title}
        {slug}
        {target}
        {views}
        {createdAt}
    </div>
  )
}

export default LinkCard