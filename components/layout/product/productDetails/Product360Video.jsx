"use client";

import { motion } from "framer-motion";
import { variant2, variantTitle, variantVideo } from "@/constants/Variants";

const Product360Video = ({ slug }) => {
    return (
        <section
            className="padding w-full h-full space-y-5 md:space-y-10"
        >
            <motion.h4
                variants={variantTitle}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="font-bold text-2xl text-start md:text-center tracking-wide sm:text-5xl lg:text-6xl"
            >
                {slug}
            </motion.h4>
            <motion.p
                variants={variant2}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate"
                className="text-[#86868B] mx-auto text-start md:text-center w-full md:w-1/2 text-base"
            >
                Our vacuum sintering furnaces are manufactured with advanced design for
                the process of compacting and forming a solid mass of material using
                heat without melting it to the point of liquefaction. It's very
                efficient and suitable for dental restorative procedures.
            </motion.p>
            <motion.div variants={variantVideo}
                viewport={{ amount: 0.3, once: true }}
                initial="initial"
                whileInView="animate" className="w-full md:w-4/5 mx-auto relative">
                <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="h-full w-full object-cover object-center"
                >
                    <source src="/demo.mp4" type="video/mp4" />
                </video>
            </motion.div>
        </section>
    );
};

export default Product360Video;
