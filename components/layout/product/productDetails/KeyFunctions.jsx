"use client";
import { parentVariant, variantGrid, variantTitle } from "@/constants/Variants";
import { motion } from "framer-motion";
const KeyFunctions = () => {
    return (
        <section
            id="Key Functions"
            name="Key Functions"
            className="padding w-full h-full block space-y-10 md:space-y-20 font-inter"
        >
            <motion.h4
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="font-bold text-2xl tracking-wide text-center sm:text-5xl lg:text-6xl"
            >
                Key Functions
            </motion.h4>
            <motion.div
                variants={parentVariant}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-16 font-roboto"
            >
                {keyFunctionList.map((list, idx) => (
                    <motion.p
                        key={idx}
                        variants={variantGrid}
                        initial="initial"
                        whileInView="animate"
                        custom={idx}
                        viewport={{ once: true }}
                        className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#86868B] relative w-3/4 mx-auto lg:w-3/5 after:absolute after:-top-5 after:left-0 after:w-full after:p-[1px] after:bg-[#86868B] after:rounded-sm"
                    >
                        <span className="text-white mr-2">{list.boldTxt}</span>
                        {list.desc}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
};

export default KeyFunctions;

const keyFunctionList = [
    {
        boldTxt: "New 16-core NeuralEngine",
        desc: "is faster and more efficient,supercharging Apple Intelligence",
    },
    {
        boldTxt: "New 6-core GPU",
        desc: "gives you enhanced graphics performance",
    },
    {
        boldTxt: "New 6-core CPU",
        desc: ",the fastest in a smartphone, runs complex workloads with less power",
    },
    {
        boldTxt: "Nearly 20% increase in total system memory bandwidth",
        desc: "highest ever in iPhone, for outstanding performance",
    },
    {
        boldTxt: "New 6-core CPU",
        desc: ",the fastest in a smartphone, runs complex workloads with less power",
    },
    {
        boldTxt: "Nearly 20% increase in total system memory bandwidth",
        desc: "highest ever in iPhone, for outstanding performance",
    },
    {
        boldTxt: "New 6-core CPU",
        desc: ",the fastest in a smartphone, runs complex workloads with less power",
    },
    {
        boldTxt: "Nearly 20% increase in total system memory bandwidth",
        desc: "highest ever in iPhone, for outstanding performance",
    },
    {
        boldTxt: "New 6-core CPU",
        desc: ",the fastest in a smartphone, runs complex workloads with less power",
    },
    {
        boldTxt: "Nearly 20% increase in total system memory bandwidth",
        desc: "highest ever in iPhone, for outstanding performance",
    },
];
