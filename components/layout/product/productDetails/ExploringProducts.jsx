"use client";
import { Button } from "@/components/UI/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { parentVariant, variantGrid, variantTitle } from "@/constants/Variants";

const ExploringProducts = () => {
    return (
        <section className="padding w-full h-full block space-y-10 md:space-y-20 font-inter">
            <motion.h4
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="font-bold text-2xl text-center tracking-wide sm:text-5xl lg:text-6xl"
            >
                Keep Discovering
            </motion.h4>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="w-full flex flex-col md:flex-row gap-12"
            >
                {exploreList.map((item, idx) => (
                    <motion.div
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        key={idx}
                        className={`w-4/5 mx-auto md:w-80 border-b border-[#424245] pt-4 pb-8 block text-center text-white space-y-4 relative h-fit`}
                    >
                        <Image
                            src={item.img}
                            height={240}
                            alt="sample product"
                            width={240}
                            className="object-contain object-center mx-auto"
                        />
                        <p className="text-[#B64400] text-xs font-semibold tracking-wider capitalize">
                            New
                        </p>
                        <h4 className="text-xl md:text-2xl xl:text-3xl font-bold !leading-snug">
                            {item.productName}
                        </h4>
                        <div className="block space-y-3">
                            <Button
                                style={
                                    "font-roboto font-normal px-4 py-2 bg-[#FF7F00] hover:!bg-orange-600/70 text-white text-xs md:!text-sm"
                                }
                                text={"Learn More"}
                            />
                            <div>
                                <Link
                                    href={item.rtbHref}
                                    className="text-[#FF7F00] font-roboto font-normal text-xs md:!text-sm"
                                >
                                    {"Request to buy >"}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ExploringProducts;

const exploreList = [
    {
        img: "/video.gif",
        productName: "Vacuum Sintering Furnace",
        lmHref: "#",
        rtbHref: "#",
    },
    {
        img: "/video.gif",
        productName: "Vacuum Pressing Furnace",
        lmHref: "#",
        rtbHref: "#",
    },
];
