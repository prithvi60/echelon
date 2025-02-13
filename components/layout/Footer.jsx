"use client";
import Link from "next/link";
import {
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname()
    const path = pathName.startsWith("/products")

    return (
        <footer className={`padding space-y-4 md:space-y-10 w-full font-inter ${path ? "bg-black text-white" : "bg-white text-black"} `}>
            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row lg:justify-between gap-12 lg:gap-8">
                <div className="block space-y-4 md:pace-y-8 w-full lg:w-1/5">
                    <Link
                        href={"/"}
                        className="flex items-center gap-2"
                    >
                        <p className="font-bold font-Inter italic">Echelon Zero</p>
                    </Link>
                    <div className="text-sm w-3/4 md:text-base space-y-3">
                        <p className={`${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"} `}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                        </p>
                    </div>
                    <ul className="flex items-center gap-2.5">
                        {socialLinks.map((list, idx) => (
                            <li key={idx} className="flex-shrink-0">
                                <Link href={list.href}>{list.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-2 md:flex md:items-start md:justify-between md:flex-row gap-x-0 gap-y-10 md:gap-12">
                    {/* <div className="flex flex-row sm:justify-center gap-8 md:gap-16"> */}
                    <div className="block space-y-3">
                        <h4 className="text-lg font-semibold capitalize tracking-wider md:text-xl">
                            Product
                        </h4>
                        <ul className="block space-y-2.5 md:space-y-4">
                            {footerLinks1.map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`text-sm capitalize md:text-base tracking-wide ${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"}`}
                                >
                                    <Link href={list.href}>{list.menu}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="block space-y-3">
                        <h4 className="text-lg font-semibold capitalize tracking-wider md:text-xl">
                            Company
                        </h4>
                        <ul className="block space-y-2.5 md:space-y-4">
                            {footerLinks2.map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`text-sm capitalize md:text-base tracking-wide ${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"}`}
                                >
                                    <Link href={list.href}>{list.menu}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* </div> */}
                    <div className="block space-y-3">
                        <h4 className="text-lg font-semibold tracking-wider md:text-xl">
                            Support
                        </h4>
                        <ul className="block space-y-2.5 md:space-y-4">
                            {footerLinks3.map((list, idx) => (
                                <li
                                    key={idx}
                                    className={`text-sm capitalize md:text-base tracking-wide ${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"}`}
                                >
                                    <Link href={list.href}>{list.menu}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="block space-y-3 w-full md:w-[30%]">
                        <h4 className="text-lg w-max font-semibold tracking-wider md:text-xl">
                            Contacts us
                        </h4>
                        <ul className={`block space-y-4 w-full ${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"}`}>
                            <li className="flex items-center gap-2 md:gap-4">
                                <FaRegEnvelope className={`${path ? "text-[#FFFFFFA3]" : "text-black"} text-lg md:text-xl flex-shrink-0`} />
                                <h4 className="text-[13px] md:text-base flex items-center gap-3 tracking-wide hover:text-warning">
                                    contact@company.com
                                </h4>
                            </li>
                            <li className="flex items-center gap-2 md:gap-4">
                                <IoCallOutline className={`${path ? "text-[#FFFFFFA3]" : "text-black"} text-lg md:text-xl flex-shrink-0`} />
                                <h4 className="text-[13px] md:text-base flex items-center gap-3 tracking-wide hover:text-warning">
                                    (414) 687 - 5892
                                </h4>
                            </li>
                            <li className="flex items-center gap-2 md:gap-4">
                                <IoLocationOutline className={`${path ? "text-[#FFFFFFA3]" : "text-black"} text-lg md:text-xl flex-shrink-0`} />
                                <h4 className="text-[13px] md:text-base flex items-center gap-3 tracking-wide hover:text-warning">
                                    794 Mcallister St San Francisco, 94102
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-auto p-[0.5px] bg-[#D9DBE9]" />
            <div className={`flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-8 ${path ? "text-[#FFFFFFA3]" : "text-[#6F6C90]"}`}>
                <p className="text-sm text-center lg:text-start md:text-base">
                    Copyright © {new Date().getFullYear()} Echelon Zero
                </p>
                <div className="text-xs text-center lg:text-start md:text-base flex items-center gap-3 md:gap-4">
                    <p>All rights reserved</p>
                    <p className={`underline underline-offset-4 ${path ? "text-[#90ADEC]" : "text-[#0033A0]"}`}>
                        Terms and Conditions
                    </p>
                    <p className={`${path ? "text-[#90ADEC]" : "text-[#0033A0]"} underline underline-offset-4`}>
                        Privacy Policy
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const footerLinks1 = [
    { menu: "Features", href: "/features" },
    { menu: "Pricing", href: "/pricing" },
    { menu: "Case studies", href: "/case_studies" },
    { menu: "Reviews", href: "/reviews" },
    { menu: "Updates", href: "/updates" },
];

const footerLinks2 = [
    { menu: "About", href: "/about" },
    { menu: "Contact us", href: "/contact" },
    { menu: "Careers", href: "/careers" },
    { menu: "Culture", href: "/culture" },
    { menu: "Blog", href: "/blog" },
];

const footerLinks3 = [
    { menu: "Getting started", href: "/getting_started" },
    { menu: "Help center", href: "/help_center" },
    { menu: "Server status", href: "/server_status" },
    { menu: "Report a bug", href: "/report" },
    { menu: "Chat support", href: "/chat_support" },
];

const socialLinks = [
    {
        icon: (
            <FaInstagram className="text-xl md:text-2xl text-[#0033A0] hover:text-blue-700/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-2xl text-[#0033A0] hover:text-blue-700/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaYoutube className="text-xl md:text-2xl text-[#0033A0] hover:text-blue-700/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaXTwitter className="text-xl md:text-2xl text-[#0033A0] hover:text-blue-700/60 hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-2xl text-[#0033A0] hover:text-blue-700/60 hover:animate-pulse" />
        ),
        href: "#",
    },
];
