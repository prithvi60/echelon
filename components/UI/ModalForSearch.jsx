"use client";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";

const ModalForSearch = ({ path }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [blogPosts, setBlogPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="grid md:-mt-2">
            <button
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-lg shadow-lg text-primary ${path ? "bg-black text-white" : "bg-white text-black"}`}
            >
                <IoSearch className="text-xl md:text-2xl text-info" />
            </button>
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                query={query || ""}
                search={[]}
                results={results | []}
                isVisible={isVisible}
            />
        </div>
    );
};

export default ModalForSearch;

const SpringModal = ({
    isOpen,
    setIsOpen,
    query,
    search,
    results,
    isVisible,
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 !z-[99999] grid w-full h-full p-8 cursor-pointer bg-blue-900/80 backdrop-blur place-items-center font-inter"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-[9999] bg-blue-600 w-full text-white rounded-lg shadow-xl cursor-default bg-primary p-4 md:p-8 max-w-3xl"
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="relative block w-full text-primary">
                                    <input
                                        required
                                        name="search"
                                        // value={query}
                                        // onChange={(e) => search(e.target.value)}
                                        type="text"
                                        placeholder="Discover the perfect products that meet your needs!"
                                        className="w-full text-black px-4 py-3 mt-1 border rounded-md border-primary focus:border-none focus:ring-0 focus:outline focus:outline-success placeholder:text-sm md:placeholder:text-base placeholder:text-blue-700 placeholder:opacity-60"
                                    />
                                    <div className="absolute right-0 p-2 bg-white top-3 md:top-2">
                                        <IoSearch className="text-xl md:text-2xl opacity-60 text-info" />
                                    </div>
                                </div>
                            </div>
                            {/* {results.length === 0 && query !== "" ? (
                                <div
                                    className={`w-full mt-8 transition-all duration-300 ease-in-out searchScroll max-h-10 origin-top`}
                                >
                                    <h4 className="text-xl font-medium tracking-wide">{`No results found for ${query}`}</h4>
                                </div>
                            ) : (
                                <div
                                    className={`w-full mt-3 overflow-y-scroll transition-all duration-300 ease-in-out searchScroll max-h-72  ${isVisible
                                        ? "opacity-100 max-h-72 scale-y-100"
                                        : "opacity-0 max-h-0 scale-y-0"
                                        } origin-top`}
                                >
                                    {results.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleNavigation(item)}
                                            className="w-full p-2 text-left  border-b padding-3.5"
                                        >
                                            <h3 className="text-lg font-bold underline underline-offset-4">
                                                {item.productName || item.title}
                                            </h3>
                                            <p className="text-sm line-clamp-6 md:line-clamp-none">
                                                {item.desc || item.blogShortRead}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
