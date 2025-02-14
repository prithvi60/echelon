"use client"

import { navlinks } from "@/constants/Data";
import DesktopMenu from "../UI/DesktopMenu";
import MobMenu from "../UI/MobMenu";
import Link from "next/link";
import ModalForSearch from "../UI/ModalForSearch";
import { usePathname } from "next/navigation";


const AcmeLogo = () => (
    <svg
        fill="none"
        height="36"
        viewBox="0 0 32 32"
        width="36"
        aria-label="Acme Logo"
    >
        <path
            clipRule="evenodd"
            d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

const NavBar = () => {
    const pathName = usePathname()
    const path = pathName.startsWith("/products")

    return (
        <header className={`px-5 md:px-10 py-5 text-sm z-30 sticky h-fit inset-0 flex-center bg-primary font-inter ${path ? "bg-black text-white" : "bg-white text-black"} backdrop-blur-md`}>
            <nav className="flex-center-between w-full relative z-auto">
                <Link href="/" className=" flex-center gap-x-2">
                    <AcmeLogo />
                    <h3 className="text-lg xl:text-xl font-Inter italic font-semibold">Echelon Zero</h3>
                </Link>

                <div className="flex-center gap-x-5">
                    <ul className="gap-x-1 lg:!flex items-center hidden">
                        {navlinks.map((menu, idx) => (
                            <DesktopMenu key={idx} menu={menu} />
                        ))}
                    </ul>
                    <div className="block lg:hidden">
                        <ModalForSearch path={path} />
                    </div>
                    <div className="lg:!hidden">
                        <MobMenu Menus={navlinks} path={path} />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <ModalForSearch path={path} />
                </div>
            </nav>
        </header>
    );
};

export default NavBar;