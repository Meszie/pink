import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-transparent border-primary">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:flex-col md:space-y-4">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <h1 className="font-gloria-hallelujah text-tertiary text-5xl font-bold drop-shadow-md ">
                        ZelinArt
                    </h1>
                </a>
                <button
                    type="button"
                    onClick={toggleMenu} // Toggle on click
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen} // Dynamically set aria-expanded
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:space-x-3">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3
                                text-secondary rounded drop-shadow-md
                                transition-transform ease-in-out duration-300
                                hover:bg-secondary hover:text-tertiary
                                md:bg-secondary md:text-white md:rounded-full
                                md:px-10 md:hover:scale-105"
                            >
                                {" "}
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/comission"
                                className="block py-2 px-3 text-secondary rounded drop-shadow-md transition-transform ease-in-out duration-300 hover:bg-secondary hover:text-tertiary md:bg-secondary md:text-white md:rounded-full md:px-10 md:hover:scale-105"
                            >
                                Commissions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/portfolio"
                                className="block py-2 px-3 text-secondary rounded drop-shadow-md transition-transform ease-in-out duration-300 hover:bg-secondary hover:text-tertiary md:bg-secondary md:text-white md:rounded-full md:px-10 md:hover:scale-105"
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tos"
                                className="block py-2 px-3 text-secondary rounded drop-shadow-md transition-transform ease-in-out duration-300 hover:bg-secondary hover:text-tertiary md:bg-secondary md:text-white md:rounded-full md:px-10 md:hover:scale-105"
                            >
                                T.0.S
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
