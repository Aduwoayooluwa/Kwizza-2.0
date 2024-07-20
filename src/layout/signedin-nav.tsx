"use client"
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    SignInButton,
    SignOutButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser
} from '@clerk/nextjs'
import { usePathname } from 'next/navigation';

const SignedInNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useUser();

    const pathname = usePathname();
    const header = pathname.split("/")[1]
    console.log(header)

    const pathnameCapitalize = () => {
        return header.charAt(0).toUpperCase() + header.slice(1);
    }

    return (
        <nav className="bg-white w-[calc(100%-50px)] dashboard md:w-[calc(100%-250px)] overflow-x-hidden lg:w-[calc(100%-250px)] ml-[50px] md:ml-[210px] lg:ml-[250px] px-6 md:px-10 py-3  absolute top-0">
            <div className="flex justify-between items-center">
                <Link href="/" passHref>
                    <p className="text-black text-[20px] font-bold">{pathnameCapitalize()}</p>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    <SignedOut>
                        <Link href="/about" passHref>
                            <p className="text-gray-800 hover:underline text-sm">About</p>
                        </Link>
                        <Link href="/contact" passHref>
                            <p className="text-gray-800 hover:underline text-sm">Contact</p>
                        </Link>
                        <Link href="/sign-in" passHref>
                            <p className="text-gray-800 hover:underline text-sm">Login</p>
                        </Link>

                        <Button color="primary">
                            <SignInButton />
                        </Button>
                    </SignedOut>
                    <SignedIn>

                        <UserButton />
                        <p>{user?.username}</p>

                    </SignedIn>
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
                    <SignedOut>
                        <Link href="/login" passHref>
                            <p className="text-gray-800 hover:underline">Login</p>
                        </Link>
                        <Button color="primary">
                            Sign Up
                        </Button>
                    </SignedOut>

                    <SignedIn>
                        <UserButton />
                        <p>{user?.username}</p>
                        <SignOutButton />
                    </SignedIn>
                </motion.div>
            )}
        </nav>
    );
};

export default SignedInNavbar;
