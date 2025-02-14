"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const router = useRouter();

  const handleClick = (val) => {
    router.push(val);
  };

  const toggleDrawer = (val) => {
    setIsOpen(!isOpen);
    setOpenMenuIndex(null);
    setOpenSubMenuIndex(null);
    handleClick(val)
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div className="relative">
      <button className="lg:hidden z-[999] relative" onClick={() => toggleDrawer("")}>
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      <motion.div
        className="fixed !z-[999] left-0 right-0 top-16 no_scrollbar overflow-y-auto h-full bg-[#FFFBEE] backdrop-blur text-black p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map((menu, i) => {
            const isMenuOpen = openMenuIndex === i;
            const hasSubMenu = menu?.subMenus?.length;
            return (
              <li key={i} className="">
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setOpenMenuIndex(isMenuOpen ? null : i)}
                >
                  {menu.menu}
                  {hasSubMenu && (
                    <MdOutlineKeyboardArrowDown
                      className={`ml-auto text-base ${isMenuOpen && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isMenuOpen ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {menu?.subMenus?.map((submenu, idx) => {
                      const isSubMenuOpen = openSubMenuIndex === idx;
                      const hasSubDiv = submenu.subDivision?.length;
                      return (
                        <li
                          key={idx}
                          className="cursor-pointer w-full"
                        >
                          <div className="flex-center-between hover:bg-white/5 rounded-md gap-x-2 w-full">
                            <h4
                              className="flex-center-between w-full p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                              onClick={() => setOpenSubMenuIndex(isSubMenuOpen ? null : idx)}
                            >
                              {submenu.subMenu}
                              {hasSubDiv && (
                                <ChevronDown
                                  className={`ml-auto ${isSubMenuOpen && "rotate-180"} `}
                                />
                              )}
                            </h4>
                          </div>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}