"use client";
import Image from "next/image";
import React from "react";
import {
    IoIosArrowDroprightCircle,
    IoIosArrowDropleftCircle,
} from "react-icons/io";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { parentVariant, variantGrid } from "@/constants/Variants";

const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SampleNextArrow />,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 648,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="px-5 py-[40px] md:px-[80px] md:py-[70px] bg-black w-full">
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="slider-container w-full"
            >
                <Slider {...settings} className="custom-slider">
                    {exploreSuitLists.map((item, idx) => (
                        <motion.div
                            variants={variantGrid}
                            initial="initial"
                            whileInView="animate"
                            custom={idx}
                            viewport={{ once: true }}
                            key={idx}
                            className="p-2 shadow-lg relative w-full mx-auto "
                        >
                            <div className="pb-3 pt-2 px-4 flex-col gap-2 items-start">
                                <div className="relative rounded-xl bg-[#260425] w-full p-2 overflow-hidden h-64 md:h-72">
                                    <Image
                                        fill
                                        alt="icon"
                                        src={item.img}
                                        className="object-contain object-center"
                                    />
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-sm ml-5 text-[#BD9DE5] font-roboto font-semibold w-4/5">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </motion.div>
        </section>
    );
};

export default ProductSlider;

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`absolute -bottom-[45px] lg:-bottom-[88px] right-24 xl:right-14 cursor-pointer`}
            onClick={onClick}
        >
            <IoIosArrowDropleftCircle className="text-3xl text-white" />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`absolute cursor-pointer -bottom-[45px] right-10 xl:right-5 lg:-bottom-[88px] z-30`}
            onClick={onClick}
        >
            <IoIosArrowDroprightCircle className="text-3xl text-white" />
        </div>
    );
}

const exploreSuitLists = [
    {
        img: "/product-front.png",
        desc: "iPhone 16 Pro Max has our largest iPhone display ever",
    },
    {
        img: "/product-front.png",
        desc: "The thinnest borders on any Apple product",
    },
    {
        img: "/product-front.png",
        desc: "Premium Grade 5 titanium is exceptionally durable",
    },
    {
        img: "/product-front.png",
        desc: "iPhone 16 Pro Max has our largest iPhone display ever",
    },
    {
        img: "/product-front.png",
        desc: "The thinnest borders on any Apple product",
    },
];
