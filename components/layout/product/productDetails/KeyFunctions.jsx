import React from "react";

const KeyFunctions = () => {
    return (
        <section id="Key Functions" className="padding w-full h-full block space-y-10 md:space-y-20 font-inter">
            <h4 className="font-bold text-2xl tracking-wide text-center sm:text-5xl lg:text-6xl">
                Key Functions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-16 font-roboto">
                {keyFunctionList.map((list, idx) => (
                    <p
                        key={idx}
                        className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-[#86868B] relative w-3/4 mx-auto lg:w-3/5 after:absolute after:-top-5 after:left-0 after:w-full after:p-[1px] after:bg-[#86868B] after:rounded-sm"
                    >
                        <span className="text-white mr-2">{list.boldTxt}</span>
                        {list.desc}
                    </p>
                ))}
            </div>
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
