"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Modal1 } from "@/components/UI/Modal";
import {
    parentVariant,
    variant1,
    variant2,
    variantGrid,
    variantTitle,
} from "@/constants/Variants";
const ProductHero = ({ slug }) => {
    const [isActive, setIsActive] = useState(0);
    const [isDropdown, setIsDropdown] = useState(false);

    const handleDropdownClick = (id) => {
        setIsActive(id);
        setIsDropdown(false);
    };

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.5,
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transitionEnd: {
                display: "none",
            },
        },
    };

    return (
        <>
            <section
                className="flex sticky top-[65px] xl:top-[84px] z-20 left-0 justify-around items-center py-3.5 bg-[#181818]"
            >
                <motion.h4
                    variants={variantTitle}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="font-bold text-base md:text-lg xl:text-xl"
                >
                    {slug}
                </motion.h4>
                <motion.ul
                    variants={parentVariant}
                    viewport={{ amount: 0.3, once: true }}
                    initial="initial"
                    whileInView="animate"
                    className="flex items-center gap-2 md:gap-4"
                >
                    {links.map((link, id) => (
                        <motion.li
                            key={id}
                            variants={variantGrid}
                            initial="initial"
                            whileInView="animate"
                            custom={id}
                            viewport={{ once: true }}
                            className={`text-sm tracking-wide hidden md:block font-normal relative w-max ${isActive === id
                                ? "after:absolute after:-bottom-5 after:right-1 after:w-11/12 after:p-[1.2px] after:bg-[#FFFFFF] after:rounded-sm"
                                : "after:hover:absolute after:hover:-bottom-5 after:hover:right-1 after:hover:w-11/12 after:hover:p-[1.2px] after:hover:bg-[#FFFFFF] after:hover:rounded-sm"
                                }`}
                        >
                            <Link
                                to={link.title}
                                spy={true}
                                offset={-100}
                                smooth={true}
                                duration={1000}
                                className="cursor-pointer"
                                onClick={() => setIsActive(id)}
                            >
                                {link.title}
                            </Link>
                        </motion.li>
                    ))}
                    <li className={`relative block md:hidden`}>
                        <MdOutlineKeyboardArrowDown
                            className={`mt-[0.6px] text-2xl cursor-pointer duration-200 ${isDropdown && "rotate-180"
                                }`}
                            onClick={() => setIsDropdown(!isDropdown)}
                        />
                        <motion.ul
                            className={`${isDropdown ? "block" : "hidden"
                                } space-y-3 sub-menu_1 bg-white w-max p-5`}
                            initial="exit"
                            animate={isDropdown ? "enter" : "exit"}
                            variants={subMenuAnimate}
                        >
                            {links.map((link, id) => (
                                <li
                                    key={id}
                                    className={`text-sm tracking-wide font-normal relative w-max ${isActive === id &&
                                        "after:absolute after:-bottom-0.5 after:right-0 after:w-full after:p-[1.2px] after:bg-black after:rounded-sm"
                                        }`}
                                >
                                    <Link
                                        to={link.title}
                                        spy={true}
                                        offset={-100}
                                        smooth={true}
                                        duration={1000}
                                        onClick={() => handleDropdownClick(id)}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    </li>
                    <motion.li
                        variants={variantTitle}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                    >
                        {/* <Button
                            style={
                                "font-inter font-normal px-2 py-1.5 bg-[#FF7F00] hover:!bg-orange-600/70 text-white text-xs md:!text-sm"
                            }
                            text={"Request to buy"}
                        /> */}
                        <Modal1
                            styles={
                                "font-inter font-normal px-2 py-1.5 bg-[#FF7F00] hover:!bg-orange-600/70 text-white text-xs md:!text-sm"
                            }
                            title={"Request to buy"}
                            type={"enquire"}
                            pageType={"main"}
                            page={""}
                        />
                    </motion.li>
                </motion.ul>
            </section>
            <section className="w-full h-full block space-y-5 font-inter text-white">
                <div className="padding flex flex-col justify-center items-center gap-3">
                    <motion.h5
                        variants={variantTitle}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="text-xl sm:text-2xl w-max lg:text-3xl tracking-wide font-bold font-roboto"
                    >
                        Vacuum Sintering Furnace
                    </motion.h5>
                    <motion.h4
                        variants={variant2}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="text-[40px] text-white neon-glow w-max sm:text-[48px] lg:text-[64px] tracking-wide font-bold"
                    >
                        Echelon
                    </motion.h4>
                    <motion.div
                        variants={variant1}
                        viewport={{ amount: 0.3, once: true }}
                        initial="initial"
                        whileInView="animate"
                        className="relative w-full h-[450px] md:h-[520px] xl:h-[620px]"
                    >
                        <Image
                            alt="product image"
                            fill
                            className="object-contain object-center"
                            src={"/Neonize.png"}
                        />
                        <motion.div
                            variants={variant2}
                            viewport={{ amount: 0.3, once: true }}
                            initial="initial"
                            whileInView="animate"
                            className="absolute top-10 left-0 w-full h-[280px] md:h-[340px] xl:h-[580px]"
                        >
                            <Image
                                alt="product image"
                                fill
                                className="object-contain object-center"
                                src={"/video.gif"}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default ProductHero;

const links = [
    { title: "Overview", href: "#Overview" },
    { title: "Key Functions", href: "#Key_Functions" },
    { title: "Specifications", href: "#Specifications" },
];
