"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ThankYouComponent = () => {
  const [previousRoute, setPreviousRoute] = useState("");
  const [pdf, setPdf] = useState({
    file: "",
    fileName: "",
  });
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const path = usePathname();
  // const category = useSearchParams().get("category");
  const modifiedUrl = path.replace("/thankyou", "");
  const downloadKey = "pdfDownloaded";

  useEffect(() => {
    const downloaded = typeof window !== 'undefined' ? localStorage.getItem(downloadKey) : null;
    setHasDownloaded(downloaded === "true");
  }, []);

  useEffect(() => {
    setPreviousRoute(document.referrer);
  }, []);

  // useEffect(() => {
  //   // Set PDF based on category
  //   if (category === "dental") {
  //     setPdf({
  //       file: "/files/Denkiro-Dental-Brochure-Digital.pdf",
  //       fileName: "Denkiro-Dental-Brochure-Digital.pdf",
  //     });
  //   } else if (category === "laboratory") {
  //     setPdf({
  //       file: "/files/Denkiro-Brochure-Digital.pdf",
  //       fileName: "Denkiro-Brochure-Digital.pdf",
  //     });
  //   } else if (category === "lab") {
  //     setPdf({
  //       file: "/files/Lab-Equipments-Brochure-Digital.pdf",
  //       fileName: "Lab-Equipments-Brochure-Digital.pdf",
  //     });
  //   } else if (
  //     category === "MPE" ||
  //     category === "ballMills" ||
  //     category === "presses" ||
  //     category === "extruders"
  //   ) {
  //     setPdf({
  //       file: "/files/Material-Processing-Brochure.pdf",
  //       fileName: "Material-Processing-Brochure.pdf",
  //     });
  //   } else if (category === "analyticalInstruments") {
  //     setPdf({
  //       file: "/files/Analytical-Instruments.pdf",
  //       fileName: "Analytical-Instruments-Brochure.pdf",
  //     });
  //   }
  //   else {
  //     setPdf({
  //       file: "/files/Denkiro-Brochure-Digital.pdf",
  //       fileName: "Denkiro-Brochure-Digital.pdf",
  //     });
  //   }
  // }, [category]);

  useEffect(() => {
    if (hasDownloaded || !pdf.file) return; // Skip if already downloaded or pdf.file is empty

    const downloadPDF = () => {
      const link = document.createElement("a");
      link.href = pdf.file;
      link.download = pdf.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Clean up
      localStorage.setItem(downloadKey, "true");
    };

    // Special case for dental furnace product line
    if (modifiedUrl === "/denkirodental/dentalfurnace/productline") {
      if (!hasDownloaded) {
        const link = document.createElement("a");
        link.href = "/files/Denkiro-Dental-Brochure-Digital.pdf";
        link.download = "Denkiro-Dental-Brochure-Digital.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        localStorage.setItem(downloadKey, "true");
      }
    } else {
      downloadPDF();
    }

  }, [pdf, modifiedUrl]);
  return (
    <section className="px-5 py-10 md:px-10 md:py-[60px] lg:px-[60px] lg:py-20 font-urbanist text-warning space-y-6">
      <div className="relative w-20 h-20 mx-auto md:h-44 md:w-56 text-warning">
        <Image
          src={
            "/EZ-logo.svg"
          }
          fill
          alt="EZ Logo"
          title="EZ Logo"
          className="object-contain -mt-2"
        />
      </div>
      <h3 className="text-3xl font-semibold text-center md:text-6xl font-Lora">
        <div className="relative mx-auto h-14 w-14 md:h-28 md:w-28 text-warning">
          <Image
            src={"/thumbs-up.gif"}
            fill
            alt="thumbs up"
            title="thumbs up"
            className="object-contain -mt-2"
          />
        </div>
        Thank You !
      </h3>
      <p className="w-full text-lg text-center md:text-2xl">
        We&apos;ve received your submission.
      </p>
      <p className="w-full text-lg text-center animate-pulse">
        " Please check your email now "
      </p>
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-5">
        <Link title="thank you button"
          scroll={false}
          href={modifiedUrl === "" ? "/" : modifiedUrl}
          className={`group/button block rounded-full px-6 py-3 bg-gradient-to-r from-[#FF7F00] via-[#FF3E9D] to-[#0051FF] hover:opacity-70 text-center text-base duration-700 delay-75 font-urbanist capitalize w-max tracking-wider`}
        >
          <div className={`h-6 w-full overflow-hidden`}>
            <h4
              className={`transition translate-y-0 group-hover/button:-translate-y-20 duration-700 text-white`}
            >
              Go Back To Home
            </h4>
            <h4
              className={`translate-y-20 transition group-hover/button:-translate-y-[25px] duration-700 group-hover/button:text-white`}
            >
              Go Back To Home
            </h4>
          </div>
        </Link>
      </div>
    </section>
  );
};
