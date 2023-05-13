import React, { useEffect, useState } from 'react'
import star from "../assets/Star.png"
import "../styles/Blog.css"

export const RatingStar = ({ rating }) => {
    const [stars, setStarts] = useState([])
    useEffect(() => {
        let arr = []
        for (let i = 0; i < rating; i++) {
            arr.push(i)
            console.log(arr)
        }
        setStarts(arr)
    }, [rating])

    console.log(stars)

    return (
        <div>
            {
                stars.map((_) => <img className='rating-star' src={star} />)
            }
        </div>
    )
}
