import Hero from '@/components/layout/Hero'
import ProductComponent from '@/components/layout/ProductComponent'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Hero />
            <ProductComponent
                btn={"View catalogue"}
                alignStyle={"w-full md:w-2/5"}
                mainStyle={"flex-col gap-8 md:gap-0 md:flex-row md:justify-between "}
                title={"Vacuum Pressing Furnace"}
                img={"/video.gif"}
                desc={
                    "Our vacuum sintering furnaces are manufactured with advanced design for the process of compacting and forming a solid mass of material using heat without melting it to the point of liquefaction. It’s very efficient and suitable for dental restorative procedures."
                }
            />
            <ProductComponent
                btn={"View catalogue"}
                btn2={"Request to buy"}
                mainStyle={
                    "flex-col-reverse gap-8 bg-[#F5F5F7] md:gap-0 md:flex-row-reverse md:justify-between "
                }
                alignStyle={"text-right w-full md:w-2/5"}
                btnAlign={"justify-end"}
                title={"Zirconia Sintering Furnace"}
                img={"/video.gif"}
                desc={
                    "VBCC’s Zirconia Sintering Furnace is perfect for sintering and crystallising zirconia for dental restorations, such as crowns, bridges, and caps. It strengthens and improves the structural integrity of material."
                }
            />
            <ProductComponent
                btn={"View catalogue"}
                btn2={"Request to buy"}
                alignStyle={"w-full md:w-3/4 text-justify"}
                mainStyle={"flex-col gap-8 text-[#383838] justify-center items-center"}
                btnAlign={"justify-center"}
                title={"Vacuum Sintering Furnace"}
                img={"/video.gif"}
                desc={
                    "Our vacuum sintering furnaces are manufactured with advanced design for the process of compacting and forming a solid mass of material using heat without melting it to the point of liquefaction. It’s very efficient and suitable for dental restorative procedures."
                }
            />
            <ProductComponent
                btn={"View catalogue"}
                btn2={"Request to buy"}
                alignStyle={"w-full md:w-3/4 text-justify"}
                mainStyle={"flex-col gap-8 text-[#383838] justify-center items-center"}
                btnAlign={"justify-center"}
                title={"Burnout Furnace"}
                img={"/video.gif"}
                desc={
                    "Our burnout furnaces are crafted especially for dental laboratories for burnout of muffles and also for speed investments. It is made with a state-of-the-art design with double-walled stainless-steel sheets and imported insulation material."
                }
            />
        </div>
    )
}

export default Page