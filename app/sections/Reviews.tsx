import React from 'react'
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../data';


const Reviews = () => {
  return (
    <div className='p-16 flex flex-col lg:flex-row lg:justify-between relative'>
      <div className='absolute left-1/4 w-3/4 inset-0 gradient-01 z-0' />
      <div className='mb-16 w-72 z-10'>
        <p className='text-slogan mb-6'>wall of love</p>
        <h2 className='h2'>Words from our fans</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-16 z-10 place-items-center'>
          {reviews.map((review, index) => (
            <ReviewCard key={index} 
            name={review.name}
            imgSrc={review.imgSrc}
            company={review.company}
            review={review.review}
            />
          )) }
      </div>
    </div>
  )
}

export default Reviews