"use client"

import { useState } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white px-6 md:px-10 lg:px-20 py-3 w-full fixed top-0">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" passHref>
                    <p className="text-black text-xl font-bold">Kwizza</p>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <div>
                        <Link href="/about" passHref>
                            <p className="text-gray-800 hover:underline text-sm">About</p>
                        </Link>
                        <Link href="/contact" passHref>
                            <p className="text-gray-800 hover:underline text-sm">Contact</p>
                        </Link>
                        <Link href="/sign-in" passHref>
                            <p className="text-gray-800 hover:underline text-sm">Login</p>
                        </Link>

                  
                    </div>
                
                </div>
                <div className="block md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <span className="text-gray-800">☰</span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="md:hidden flex flex-col items-start space-y-2 mt-2"
                >
                    <Link href="/about" passHref>
                        <p className="text-gray-800 hover:underline">About</p>
                    </Link>
                    <Link href="/contact" passHref>
                        <p className="text-gray-800 hover:underline">Contact</p>
                    </Link>
                    <>
                    <Link href="/login" passHref>
                        <p className="text-gray-800 hover:underline">Login</p>
                    </Link>
                    <Button color="primary">
                        Sign Up
                    </Button>
                    </>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
