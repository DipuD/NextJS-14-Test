'use client';

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-900 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl">E-COMMERCE</a>
                <div className="hidden md:flex">
                    <Link href="/" className="mx-2 hover:underline hover:py-1">
                        PRODUCTS
                    </Link>
                    <Link href="/cart" className="mx-2 hover:underline hover:py-1">
                        CART
                    </Link>
                </div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-4 py-2 text-center hidden md:flex">LOGIN</button>
                <div className="md:hidden flex items-center">
                    <button onClick={()=>{
                        setIsOpen(!isOpen)
                    }}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};