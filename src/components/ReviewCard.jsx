import React from 'react'
import {star} from  '../assets/icons'

const ReviewCard = ({imgURL,feedback,rating,customerName}) => {
  return (
    <div className='flex-col justify-content text-center max-w-sm'>
      <img src={imgURL} alt="profile" width={70} height={70} className='rounded-full w-[120px] h-[120px] object-cover justify-center ml-[120px]'/>
      <p className='text-center info-text max-w-sm mt-6'>
         {feedback}
      </p>
      <div className='flex gap-3 text-center justify-center max-w-sm text-slate-gray'>
        <img src={star} alt="" width={24} height={24}/>
        <p>({rating})</p>
      </div>

      <p className='font-bold font-palanquin mt-1'>{customerName}</p>
    </div>
  )
}

export default ReviewCard
