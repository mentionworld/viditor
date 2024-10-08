import React from 'react'
import Logo from '../components/Logo'
import Icon from '../components/Icon'
import { FaApple, FaGlobe, FaGooglePay, FaWindows } from 'react-icons/fa'
import Image from 'next/image'
import BrandList from '../components/BrandList'

const Download = () => {
  return (
    <div className='p-8 flex flex-col lg:p-16 mt-24 md:mt-0 overflow-x-hidden 2xl:overflow-x-visible' id='download'>
      <div className='relative flex flex-col md:flex-row items-center mb-96 md:mb-0 md:h-[550px]'>
          <div className='w-72 flex flex-col gap-8 mb-36 md:mb-0'>
            <Logo size='lg' />
            <p className='p'>
              Try it now for free on ios, Android, PC, and Web. Choose your plateform and get started today!
            </p>
            <div className='flex flex-row justify-between'>
              <Icon icon={FaApple} link='#' />
              <Icon icon={FaGooglePay} link='#' />
              <Icon icon={FaWindows} link='#' />
              <Icon icon={FaGlobe} link='#' />
            </div>
          </div>
          <div className='absolute left-4 top-72 md:top-auto md:left-1/2 w-[800px] rounded-3xl overflow-hidden border-2
           border-black ring-1 ring-sky-950 ring-offset-[24px] ring-offset-slate-950'>
              <Image src='/download.png' alt='Interface' width={800} height={420} />
          </div>
      </div>
      <BrandList />
    </div>
  )
}

export default Download