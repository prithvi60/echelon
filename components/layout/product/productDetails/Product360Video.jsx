"use client"
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Product360Video = ({ slug }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
            setIsPlaying(!isPlaying);
        }
    };
    return (
        <section id="Overview" className='padding w-full h-full space-y-5 md:space-y-10'>
            <h4 className='font-bold text-2xl text-start md:text-center tracking-wide sm:text-5xl lg:text-6xl'>{slug}</h4>
            <p className='text-[#86868B] mx-auto text-start md:text-center w-full md:w-1/2 text-base'>Our vacuum sintering furnaces are manufactured with advanced design for the process of compacting and forming a solid mass of material using heat without melting it to the point of liquefaction. It's very efficient and suitable for dental restorative procedures.</p>
            <div className='w-full md:w-4/5 mx-auto relative'>
                <video
                    ref={videoRef}
                    muted
                    loop
                    // autoPlay
                    playsInline
                    className="h-full w-full object-cover object-center"
                >
                    <source src="/demo.mp4" type="video/mp4" />
                </video>
                <button
                    onClick={togglePlayPause}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 text-white rounded-full"
                >
                    {isPlaying ? <FaPlay className="text-3xl" /> : <FaPause className="text-3xl" />}
                </button>
            </div>
        </section>
    )
}

export default Product360Video
