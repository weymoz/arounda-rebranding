import React from 'react'
import { Link } from 'react-router-dom'

const TagLink = ({ tagName }) => {
    return <Link to={`/blog?tag=${tagName}`}>{tagName}</Link>
}

export default TagLink