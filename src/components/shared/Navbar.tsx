"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-white">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Left Section */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/navLogo.png"
                            alt="navLogo"
                            width={32}
                            height={32}
                        />
                        <Link href="/" className="text-[24px]  font-bold font-red-hat-display">QuickHire</Link>
                    </div>

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex gap-6 text-gray-600 font-medium text-epilogue">
                        <li className="hover:text-black transition">
                            <Link href="jobs">Find Jobs</Link>
                        </li>
                        <li className="hover:text-black transition">
                            <Link href="companies">Browse Companies</Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section Desktop */}
                <div className="hidden md:flex items-center gap-4">
                    <Button variant={"secondaryButton"}>
                        Login
                    </Button>
                    <Button variant={"primaryButton"}>
                        Sign Up
                    </Button>
                </div>

                {/* Menu Button for mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col gap-4 px-6 pb-6">
                    <Link href="jobs" className="text-gray-700 hover:text-black transition">
                        Find Jobs
                    </Link>
                    <Link href="companies" className="text-gray-700 hover:text-black transition">
                        Browse Companies
                    </Link>

                    <hr />

                    <Button variant={"secondaryButton"}>
                        Login
                    </Button>
                    <Button variant={"primaryButton"}>
                        Sign Up
                    </Button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;