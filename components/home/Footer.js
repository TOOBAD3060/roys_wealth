import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import Link  from 'next/link'

export const Footer = () => {
  return (
    <footer>
    <div className="container mx-auto text-xl leading-[35px] pb-4 text-[#333333] flex justify-between">
        <h1 className='hidden md:block font-clash font-semibold leading-[59px] text-grey-dark text-2xl items-center'>ARTSY.</h1>
        <ul className='hidden md:block'>
            <li className='mb-4 last:mb-0'><Link href="/">Home</Link></li>
            <li className='mb-4 last:mb-0'><Link href="/marketplace">Market Place</Link></li>
            <li className='mb-4 last:mb-0'><Link href="/auctions">Auctions</Link></li>
            <li className='mb-4 last:mb-0'><Link href="/drop">Drops</Link></li>
        </ul>
        <ul className='hidden md:block'>
            <li className='mb-4 last:mb-0'>Blog</li>
            <li className='mb-4 last:mb-0'>Wallets</li>
            <li className='mb-4 last:mb-0'>Rates</li>
            <li className='mb-4 last:mb-0'>High bids</li>
        </ul>
        <ul className='text-sm md:text-xl'>
            <li className='md:hidden mb-[14px]'>REACH US</li>
            <li className='flex items-center mb-[14px] md:mb-4'>
                <AiOutlineMail className='h-6 w-6 md:h-[61px] md:w-[54px]'/>
                <span>artsystudios@gmail.com</span>
            </li>
            <li className='flex items-center'>
               <AiOutlineMail className='h-6 w-6 md:h-[61px] md:w-[54px]' />
                <span>Lagos, Nigeria.</span>
            </li>
        </ul>
    </div>
    <p className='hidden md:block text-center -spacing-[0.02em] text-[#333333]/[0.5] text-sm font-medium font-rubik mt-10 mb-11'>Roys Wealth © {new Date().getFullYear()}. All Rights Reserved.</p>
</footer>
  )
}
