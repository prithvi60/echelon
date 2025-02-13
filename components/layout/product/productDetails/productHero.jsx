"use client";
import { Button } from "@/components/UI/Button";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
    // console.log(isActive);

    return (
        <section className="w-full h-full block space-y-5 font-inter text-white">
            <div className="flex justify-around items-center py-3.5 bg-[#181818]">
                <h4 className="font-bold text-base md:text-lg xl:text-xl">{slug}</h4>
                <ul className="flex items-center gap-2 md:gap-4">
                    {links.map((link, id) => (
                        <li
                            key={id}
                            onClick={() => setIsActive(id)}
                            className={`text-sm tracking-wide hidden md:block font-normal relative w-max ${isActive === id
                                ? "after:absolute after:-bottom-5 after:right-1 after:w-11/12 after:p-[1.2px] after:bg-[#FFFFFF] after:rounded-sm"
                                : "after:hover:absolute after:hover:-bottom-5 after:hover:right-1 after:hover:w-11/12 after:hover:p-[1.2px] after:hover:bg-[#FFFFFF] after:hover:rounded-sm"
                                }`}
                        >
                            <Link href={link.href}>{link.title}</Link>
                        </li>
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
                                    onClick={() => handleDropdownClick(id)}
                                    className={`text-sm tracking-wide font-normal relative w-max ${isActive === id &&
                                        "after:absolute after:-bottom-0.5 after:right-0 after:w-full after:p-[1.2px] after:bg-black after:rounded-sm"
                                        }`}
                                >
                                    <Link
                                        to={link.title}
                                        href={link.title}
                                        title={link.title}
                                        spy={true}
                                        offset={-200}
                                        smooth={true}
                                        duration={1000}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    </li>
                    <li>
                        <Button
                            style={
                                "font-inter font-normal px-2 py-1.5 bg-[#FF7F00] hover:!bg-orange-600/70 text-white text-xs md:!text-sm"
                            }
                            text={"Request to buy"}
                        />
                    </li>
                </ul>
            </div>
            <div className="padding flex flex-col justify-center items-center gap-3">
                <h5 className="text-xl sm:text-2xl w-max lg:text-3xl tracking-wide font-bold font-roboto">
                    Vacuum Sintering Furnace
                </h5>
                <h4 className="text-[40px] text-white neon-glow w-max sm:text-[48px] lg:text-[64px] tracking-wide font-bold">
                    Echelon
                </h4>
                <div className="relative w-full h-[450px] md:h-[520px] xl:h-[620px]">
                    <Image
                        alt="product image"
                        fill
                        className="object-contain object-center"
                        src={"/Neonize.png"}
                    />
                    <div className="absolute top-24 left-0 w-full h-[280px] md:h-[340px] xl:h-[420px]">
                        <Image
                            alt="product image"
                            fill
                            className="object-contain object-center"
                            src={"/product-front.png"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;

const links = [
    { title: "Overview", href: "#" },
    { title: "Key Functions", href: "#" },
    { title: "Specifications", href: "#" },
];
