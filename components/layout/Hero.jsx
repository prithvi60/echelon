import Image from 'next/image'
import React from 'react'
import { Button } from '../UI/Button'

const Hero = () => {
    return (
        <section className='padding w-full h-full font-inter'>
            <div className='text-center w-full space-y-3'>
                <h4 className='font-semibold text-2xl sm:text-3xl lg:text-4xl'>Echelon Zero</h4>
                <h2 className='font-bold text-6xl sm:text-7xl lg:text-[115px] bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] text-transparent to-[#0051FF] bg-clip-text'>Think Possible</h2>
                <Button text={"View catalogue"} style={"text-sm md:text-base font-roboto font-normal p-2.5 md:p-5 "} />
                <div className='relative overflow-hidden w-full h-64 sm:h-96 lg:h-[480px]'>
                    <Image fill src={"/hero-bg.png"} alt='hero bg image' className='object-contain object-center' />
                </div>
            </div>
        </section>
    )
}

export default Hero
