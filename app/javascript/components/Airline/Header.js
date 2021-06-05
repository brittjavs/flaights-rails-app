import React from 'react'

const Header = (props) => {
    const {name, image_url, avg_score} = props.attributes
    const total = props.reviews.length
    return(
        <div className="wrapper">
            <h1><img src={image_url} alt={name}/>{name}</h1>
            <div className="total-reviews">{total} User Reviews</div>
            <div className="star-rating"></div>
            <div className="total-avg">{avg_score}</div>
        </div>
    )
}

export default Header