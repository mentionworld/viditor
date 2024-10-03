import React from 'react';
import FaqCard from '../components/FaqCard';
import { faqs } from '../data';



const Faq = () => {
  const formatNumber = (number: number):string => {
    if(number < 10) return '0' + number + '.'
    return number + '.'
  }
  return (
    <div className='px-4 lg:px-16 pt-28' id='faq'>
      <h2>You have got question, we`ve got answers.</h2>
      <p>Find your answers below</p>
      <div className='grid md:grid-cols-2 mt-16 gap-y-4 gap-x-16 '>
        {faqs.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} number={formatNumber(index + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Faq