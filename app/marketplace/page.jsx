'use client'
import React from 'react'
import Link from 'next/link'
import Transitions from '@/components/home/Transition'
import { useGlobalContext } from '@/Context'
import SideNav from '@/components/marketplace/SideNav'
import { Products } from '@/components/marketplace/Products'
import { SkeletonLoader } from '@/components/marketplace/SkeletonLoader'

function ProductPage() {
    const {products} = useGlobalContext()

    return (
    <Transitions>
        <div className='md:mt-5 mb-16 h-calc overflow-y-scroll'>
            <div className='container mx-auto flex md:px-12 px-0'>
                <SideNav />
                <main className='px-4 md:px-11 w-full'>
                    <article className='md:hidden text-[#BCB7B7] mb-4'>
                        <p className='text-lg font-medium leading-[51.5px] mb-4'><Link href="/">Home/</Link> <Link href="marketplace">Marketplace/</Link> <span className='text-grey'>Editorials</span></p>
                        <p className='font-poppin'><i>See 1-6 of 15 results</i></p>
                    </article>
                    <div className='w-full h-[3.75rem] text-black text-lg leading-[150%] rounded-[15px] shadow-5xl md:shadow-4xl border mb-8 flex items-center justify-between px-4'>
                        <p className='hidden md:block'>See 1-6 of 15 results</p>
                        <select name="filter-by" id="filter-by" className='md:hidden  border-black md:border-[0.4px] p-2 rounded-lg focus:outline-0 bg-transparent'>
                            <option value="">Filter</option>
                        </select>
                        <select name="sort-by" id="sort-by" className='border-black md:border-[0.4px] p-2 md:px-8 rounded-lg focus:outline-0 bg-transparent'>
                            <option value="">Sort By</option>
                        </select>
                    </div>
                    
                    {/* Check if the product array contain items, if yes display the product else display the skeleton loaders  */}
                    {products.length ? <Products/> : <SkeletonLoader />}
                </main>
               
            </div>
            {/* <div  className='md:hidden px-4 md:px-0 mt-5'>
                      <Footer />
                </div> */}
        </div>
    </Transitions>
    )
}

export default ProductPage
