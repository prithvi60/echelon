"use client";
import { parentVariant, variantGrid, variantTitle } from "@/constants/Variants";
import { motion } from "framer-motion";
const KeyFunctions = ({ about, data }) => {
    return (
        <section
            id="Key Functions"
            name="Key Functions"
            className={`${!about && "padding"} w-full h-full block space-y-10 md:space-y-20 font-inter`}
        >
            <motion.h4
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className={`font-bold text-2xl tracking-wide sm:text-5xl lg:text-6xl ${about ? "" : "text-center"
                    }`}
            >
                {about ? "Why Echelon Zero ?" : "Key Functions"}
            </motion.h4>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className={`${about
                    ? "block space-y-10 md:space-y-16"
                    : " grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-16"
                    } font-roboto`}
            >
                {data.map((list, idx) => (
                    <motion.p
                        key={idx}
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        className={`${about ? "w-full md:w-4/5" : "w-3/4 mx-auto lg:w-3/5"} text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#86868B] relative after:absolute after:-top-5 after:left-0 after:w-full after:p-[1px] after:bg-[#86868B] after:rounded-sm`}
                    >
                        <span className={`${about ? "text-black" : "text-white"} mr-1 md:mr-2`}>
                            {list.boldTxt}
                        </span>
                        {list.desc}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
};

export default KeyFunctions;


