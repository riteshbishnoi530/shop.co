import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'

function DressStyle() {
  return (
    <div className='px-4'>
      <div className='max-w-[1240px] px-6 mx-auto bg-[#F0F0F0] pt-[70px] pb-[76px] rounded-[40px]'>
        <Heading customHeading='BROWSE BY dress STYLE' headingClass='text-center max-sm:max-w-[350px] mx-auto mb-16'/>
        <div className='flex flex-col gap-5 max-[885px]:hidden'>
          <div className='flex gap-5 justify-center w-full max-w-[1111px] mx-auto'>
            <Image className='w-full max-w-[407px] max-xl:max-w-[350px] max-lg:max-w-[280px]' width={407} height={289} src="/assets/images/casual.webp" alt='casual' />
            <Image className='w-full max-w-[684px] max-xl:max-w-[570px] max-lg:max-w-[500px]' width={684} height={289} src="/assets/images/formal.webp" alt='casual' />
          </div>
          <div className='flex gap-5 justify-center'>
            <Image className='w-full max-w-[684px] max-xl:max-w-[570px] max-lg:max-w-[500px]' width={684} height={289} src="/assets/images/party.webp" alt='casual' />
            <Image className='w-full max-w-[407px] max-xl:max-w-[350px] max-lg:max-w-[280px]' width={407} height={289} src="/assets/images/gym.webp" alt='casual' />
          </div>
        </div>
        <div className='min-[885px]:hidden gap-5 flex flex-col'>
          <div className='flex gap-5 justify-center max-md:flex-col'>
            <Image className='w-full max-md:mx-auto max-w-[310px] max-md:max-w-[500px]' width={310} height={190} src="/assets/images/casual-sm.webp" alt='casual' />
            <Image className='w-full max-md:mx-auto max-w-[310px] max-md:max-w-[500px]' width={310} height={190} src="/assets/images/formal-sm.webp" alt='casual' />
          </div>
          <div className='flex gap-5 justify-center max-md:flex-col'>
            <Image className='w-full max-md:mx-auto max-w-[310px] max-md:max-w-[500px]' width={310} height={190} src="/assets/images/party-sm.webp" alt='casual' />
            <Image className='w-full max-md:mx-auto max-w-[310px] max-md:max-w-[500px]' width={310} height={190} src="/assets/images/gym-sm.webp" alt='casual' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DressStyle