import React from 'react'
import Image from 'next/image'

function DressStyle() {
  return (
    <div>
        <div className='max-w-[1240px] mx-auto bg-[#F0F0F0] pt-[70px] pb-[76px] rounded-[40px]'>
            <h2 className='font-bold text-5xl mb-16 text-center uppercase font-integral'>BROWSE BY dress STYLE</h2>
            <div className='flex flex-col gap-5'>
            <div className='flex gap-5 justify-center w-full max-w-[1111px] mx-auto'>
                <Image className='w-full max-w-[407px] max-xl:max-w-[380px] max-lg:max-w-[280px]' width={407} height={289} src="/assets/images/casual.webp" alt='casual'/>
                <Image className='w-full max-w-[684px] max-xl:max-w-[600px] max-lg:max-w-[500px]' width={684} height={289} src="/assets/images/formal.webp" alt='casual'/>
            </div>
            <div className='flex gap-5 justify-center'>
                <Image className='w-full max-w-[684px] max-xl:max-w-[600px] max-lg:max-w-[500px]' width={684} height={289} src="/assets/images/party.webp" alt='casual'/>
                <Image className='w-full max-w-[407px] max-xl:max-w-[380px] max-lg:max-w-[280px]' width={407} height={289} src="/assets/images/gym.webp" alt='casual'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DressStyle