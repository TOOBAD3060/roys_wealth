import React from 'react'
import Rectangle242 from '@/public/assets/mobileHero/Rectangle242.png'
import Rectangle240 from '@/public/assets/mobileHero/Rectangle240.png'
import Rectangle241 from '@/public/assets/mobileHero/Rectangle241.png'
import Image from 'next/image'

export const MobileHero = () => {
  return (
    <div className='mt-16 mb-[100px] md:hidden '>
    <div className='relative h-[300px] w-fit mx-auto'>
        <Image src={Rectangle240} alt="" className='absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 -rotate-[9.31deg]'/>
        <Image src={Rectangle241} alt="" className='absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 rotate-[7.75deg]'/>
        <Image src={Rectangle242} alt="" className='left-1/2 h-full'/>
        <div className='blurBox bg-[#C05609] left-0 bottom-0'></div>
        <div className='blurBox bg-[#F44336] right-0 bottom-0'></div>
        <div className='blurBox bg-[#006CA2] right-0 top-0'></div>
    </div>
</div>
  )
}
