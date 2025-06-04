import KeyFunctions from "@/components/layout/product/productDetails/KeyFunctions";
import { whyEshelonzero } from "@/constants/Data";
import Image from "next/image";
import React from "react";

const Page = () => {
    return (
        <section className="w-full h-full flex flex-col md:flex-row overflow-hidden relative px-5 py-[40px] md:pl-[80px] md:py-[70px] xl:pl-[144px]">
            <div className="w-full md:w-1/2 lg:w-3/5">
                <KeyFunctions about data={whyEshelonzero} />
            </div>
            <div className="w-full hidden md:block md:w-1/2 lg:w-2/5 relative">
                <div className="w-full h-[700px] xl:h-[850px] absolute top-8 -right-14 lg:-right-20 xl:-right-28">
                    <Image
                        alt="oval svg"
                        src={"/oval.svg"}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>
        </section>
    );
};

export default Page;
