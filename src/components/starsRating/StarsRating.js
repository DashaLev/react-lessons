import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './StarsRating.css'

export const StarsRating = ({initialStars}) => {

    const [rating, setRating] = useState(initialStars)

    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div className={'stars-block'}>
            <Rating stars={10} onClick={handleRating} ratingValue={rating} />
            <div className={'stars-number'}>{rating}</div>
        </div>
    )

}

