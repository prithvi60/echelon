import Hero from "@/components/layout/Hero";
import ProductComponent from "@/components/layout/ProductComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <Hero home /> */}
      <div className="w-full min-h-screen flex justify-center items-center">
        <Image
          alt="echelon gif"
          src={"/eshelon.gif"}
          width={900}
          height={900}
          unoptimized
          className="object-contain object-center"
        />
      </div>
    </main>
  );
}
