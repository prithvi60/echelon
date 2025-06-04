"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button";
import { childVariants, variant2, variantTitle } from "@/constants/Variants";
import { motion } from "framer-motion";
const Hero = ({ home }) => {
    return (
        <section className={`padding w-full h-full font-inter ${home ? "bg-[#F5F5F7]" : "bg-transparent"}`}>
            <div className="text-center w-full space-y-3">
                <motion.h4
                    variants={variantTitle}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="font-semibold text-2xl sm:text-3xl lg:text-4xl"
                >
                    Echelon Zero
                </motion.h4>
                <motion.h4
                    variants={variant2}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="font-bold text-6xl sm:text-7xl lg:text-[115px] bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] text-transparent to-[#0051FF] bg-clip-text"
                >
                    Think Possible
                </motion.h4>
                {!home && (
                    <motion.div
                        variants={variantTitle}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                    >
                        <Button
                            text={"View catalogue"}
                            style={"text-sm md:text-base font-roboto font-normal p-2.5 md:p-5 "}
                        />
                    </motion.div>
                )}
                <motion.div
                    variants={childVariants}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="relative overflow-hidden w-full h-64 sm:h-96 lg:h-[480px]"
                >
                    <Image
                        fill
                        src={"/video.gif"}
                        alt="hero bg image"
                        className="object-contain object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
