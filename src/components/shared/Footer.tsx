"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaDribbble, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#202430] text-gray-700">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto text-white px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10  border-b border-gray-300">
                {/* 1st part: logo + text */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Image src="/navLogo.png" alt="Logo" width={32} height={32} />
                        <span className="text-2xl font-bold">QuickHire</span>
                    </div>
                    <p className="text-sm text-white">
                        Great platform for the job seeker that passionate about startups. Find your dream job easier.
                    </p>
                </div>

                {/* 2nd part: About Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition">Company</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Advice</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* 3rd part: Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><Link href="#" className="hover:text-white transition">Help Docs</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Guide</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Updates</Link></li>
                        <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
                    </ul>
                </div>

                {/* 4th part: Subscribe */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Get Job Notifications</h3>
                    <p className="text-sm text-white mb-4">
                        The latest job news, articles, sent to your inbox weekly.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A8ADB7]"
                        />
                        <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="">
                <div className="max-w-7xl mx-auto px-6 py-[42px] flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-white">© 2026 QuickHire. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 md:mt-0 text-white">
                        <Link href="#"><FaFacebookF className="hover:text-blue-600 transition" /></Link>
                        <Link href="#"><FaInstagram className="hover:text-pink-500 transition" /></Link>
                        <Link href="#"><FaDribbble className="hover:text-pink-400 transition" /></Link>
                        <Link href="#"><FaLinkedinIn className="hover:text-blue-700 transition" /></Link>
                        <Link href="#"><FaTwitter className="hover:text-blue-500 transition" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;