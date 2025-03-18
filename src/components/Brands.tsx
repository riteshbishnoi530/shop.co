import { BRANDS_LIST } from '@/utils/helper'
import React from 'react'
import Image from 'next/image'

function Brands() {
  return (
    <div className='bg-black px-4 py-[44.5px] max-lg:py-10'>
        <div className='max-w-[1240px] mx-auto flex max-lg:flex-wrap max-lg:justify-center gap-5 justify-between'>
        {BRANDS_LIST.map((brand, index) => (
              <Image width={206} height={33} key={index} src={brand} alt="Brand Logo" className=' h-full max-h-[33px] max-sm:max-h-[23px] w-fit' />
            ))}
        </div>
    </div>
  )
}

export default Brands