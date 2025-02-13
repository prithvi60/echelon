import React from "react";

const Page = async ({ params }) => {
    const { slug } = await params;
    const decodedSlug = slug.replace(/_/g, " ");
    return (
        <section className="w-full bg-black text-white h-screen flex justify-center items-center">
            <h4 className="font-inter text-3xl md:text-5xl font-semibold tracking-wider">
                {decodedSlug}
            </h4>
        </section>
    );
};

export default Page;
