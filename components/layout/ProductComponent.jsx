"use client"
import React from 'react'
import { Button } from '../UI/Button'
import Image from 'next/image'
import { childVariants, variant2 } from '@/constants/Variants'
import { motion } from "framer-motion";
const ProductComponent = ({ mainStyle, btn, btn2, alignStyle, btnAlign, title, img, desc }) => {
    return (
        <section className={`padding w-full h-full font-inter flex ${mainStyle}`}>
            <motion.div
                variants={childVariants}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate" className={`block space-y-4 md:space-y-8 ${alignStyle}`}>
                <h4 className='font-bold text-4xl tracking-wide sm:text-5xl lg:text-6xl'>{title}</h4>
                <p className='font-bold text-base sm:text-lg tracking-wide lg:text-xl'>{desc}</p>
                <div className={`flex items-center gap-5 ${btnAlign}`}>
                    <Button text={btn} style={"text-sm md:text-base font-inter font-normal p-2.5"} />
                    {btn2 && (
                        <Button text={btn2} style={"text-sm md:text-base font-inter font-normal p-2.5"} />
                    )}
                </div>
            </motion.div>
            <div className='w-full md:w-1/2'>
                <motion.div
                    variants={variant2}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate" className='relative mx-auto w-full h-96 sm:h-[480px] lg:h-[580px]'>
                    <Image alt='sample image' fill src={img} className='object-contain object-center' />
                </motion.div>
            </div>
        </section>
    )
}

export default ProductComponent
