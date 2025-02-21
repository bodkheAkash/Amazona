import React from "react"
import { Star } from "lucide-react"

const Rating = ({
  rating = 0,
  size = 6,
}: {
  rating: number
  size?: number
}) => {
  const fullStars = Math.floor(rating)
  const partialStar = rating % 1
  const emptyStars = 5 - Math.ceil(rating)
  return (
    <>
      <div className='flex items-center'>
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`w-${size} h-${size} full-primary text-primary`}
          />
        ))}
        {partialStar > 0 && (
          <div className='relative'>
            <Star className={`w-${size} h-${size} text-primary`} />
            <div
              className='absolute top-0 left-0 overflow-hidden'
              style={{ width: `${partialStar * 100}%` }}
            >
              <Star className='w-6 h-6 full-primary text-primary'></Star>
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={`w-${size} h-${size} text-primary`}
          ></Star>
        ))}
      </div>
    </>
  )
}

export default Rating
