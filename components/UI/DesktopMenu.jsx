"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const [leaveTimeout, setLeaveTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
      setLeaveTimeout(null);
    }
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsHover(false);
    }, 250);
    setLeaveTimeout(timeout);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      // transition: {
      //   duration: 0.2,
      // },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenus?.length;

  return (
    <>
      <motion.li
        className={`group/link relative z-auto px-1`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        key={menu.menu}
      >
        <span className="flex-center gap-1 hover:bg-white/5 text-base xl:text-xl cursor-pointer px-1 xl:px-2 py-1.5 xl:py-2 rounded-xl relative w-max after:hover:absolute after:hover:bottom-0.5 after:hover:right-1 after:hover:w-11/12 after:hover:p-[2px] after:hover:bg-black after:hover:rounded-sm">
          {/* {menu.menu === "Products" ? (
            `${menu.menu}`
          ) : ( */}
          <Link href={menu.href}>{menu.menu}</Link>
          {/* // )} */}

          {hasSubMenu && (
            <MdOutlineKeyboardArrowDown className="mt-[0.6px] text-lg md:text-xl group-hover/link:text-warning group-hover/link:rotate-180 duration-200" />
          )}
        </span>
      </motion.li>
      <div className="w-full h-fit">
        {hasSubMenu && (
          <motion.div
            className={`sub-menu py-10 px-10 w-full bg-[#F0F0F0]`}
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
          >
            <div className={`flex justify-center items-center gap-10 w-full`}>
              {hasSubMenu &&
                menu.subMenus?.map((submenu, i) => (
                  <div
                    className="relative cursor-pointer w-max"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={i}
                  >
                    <Link href={submenu.href || "#"}
                      className={`w-full block text-center space-y-4 relative h-fit`}
                    >
                      <Image
                        src={submenu.img}
                        height={50}
                        alt="sample product"
                        width={50}
                        className="object-contain object-center mx-auto"
                      />
                      <div
                        href={submenu.href || "#"}
                        className={`font-semibold block w-11/12 space-y-2`}
                      >
                        <h4 className="text-base xl:text-lg hover:text-black/80  !leading-snug">
                          {submenu.subMenu}
                        </h4>
                        <p className="text-[#B64400] text-xs font-semibold tracking-wider capitalize">
                          New
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
