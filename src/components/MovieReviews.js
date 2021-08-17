// Code MovieReviews Here
// import Review from './Review'


import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            { reviews.map(review => review) }
            
        </div>
    )
}

export default MovieReviews
