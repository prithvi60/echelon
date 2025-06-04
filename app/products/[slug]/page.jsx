import ExploringProducts from "@/components/layout/product/productDetails/ExploringProducts";
import KeyFunctions from "@/components/layout/product/productDetails/KeyFunctions";
import Product360Video from "@/components/layout/product/productDetails/Product360Video";
import ProductHero from "@/components/layout/product/productDetails/productHero";
import ProductSlider from "@/components/layout/product/productDetails/ProductSlider";
import Specifications from "@/components/layout/product/productDetails/Specifications";
import { keyFunctionList } from "@/constants/Data";
import React from "react";

const Page = async ({ params }) => {
    const { slug } = await params;
    const decodedSlug = slug.replace(/_/g, " ");
    return (
        <section className="w-full bg-black text-white h-full">
            <ProductHero slug={decodedSlug} />
            <ProductSlider />
            <Product360Video slug={decodedSlug} />
            <KeyFunctions data={keyFunctionList} />
            <Specifications />
            <ExploringProducts />
        </section>
    );
};

export default Page;
