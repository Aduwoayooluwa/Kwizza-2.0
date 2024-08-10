"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaTachometerAlt, FaClipboardList, FaTrophy, FaCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import DashboardNavigation from './dashboard-nav';
import { GrNext } from "react-icons/gr";
import { useState } from 'react';

const sidebarVariants = {
    hidden: {
        x: '-100%', 
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    },
    visible: {
        x: '0%', 
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        x: '-100%',  
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    }
};


interface HamburgerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Hamburger(props: HamburgerProps) {
    return (
        <motion.button             
           {...(props as any)} 
           whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 bg-black z-30 rounded-full flex md:hidden shadow absolute -left-1 top-10 ${props.className}`}
        >
            <span>
                <GrNext color="white" fontSize={14} />
            </span>
        </motion.button>
    );
}
export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    function onOpen() {
        setHamburgerOpen(true)
    }

    function onClose() {
        setHamburgerOpen(false)
    }
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/all-quizzes' },
        { name: 'Quiz', icon: <FaClipboardList />, link: '/quiz' },
        { name: 'Leaderboard', icon: <FaTrophy />, link: '/leaderboard' },
        { name: 'Settings', icon: <FaCog />, link: '/settings' },
    ]

    return (
        <div className="flex bg-[#f1f5f8] relative min-h-screen ">
            <Hamburger onClick={onOpen} />

            {/* is hamburger open */}
            {
                hamburgerOpen ? (
                    <motion.div 
                    initial="hidden"
            animate={hamburgerOpen ? "visible" : "hidden"}
            exit="exit"
            variants={sidebarVariants}

                        className='fixed h-[100vh] space-y-8 p-8 py-10 left-0 top-0 z-50 bg-white shadow'>
                         <div className="mb-10 w-full">
                        <Image src="/logo.png" alt="Logo" width={30} height={30} />
                        
                        </div>
                        
                    <div className="space-y-8">
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={item.link} className={`w-full ${pathname === item.link ? "text-gray-900" : "text-gray-400"} flex space-x-5 items-center`}>  
                                <motion.div whileHover={{ scale: 1.1 }} className={`text-xl `}>{item.icon}</motion.div>                             
                            </Link>
                        ))}
                    </div>
                        
                        
                     <button aria-label="btn-l" className="bottom-10 px-8 flex items-center font-semibold left-0  text-gray-400 absolute" onClick={() => {}}>
                            <FiLogOut fontWeight="700" /> 
                    </button>
                </motion.div>
                ): null
            }
           
            <motion.div
                className="bg-white fixed top-0 left-0 h-full user-board shadow-r-lg w-[50px] md:w-[214px] lg:w-[240px] hidden md:flex flex-col"
                
            >
                <div className="w-full pt-10 px-8 relative h-full">
                    <div className="mb-10 w-full">
                        <Image src="/logo.png" alt="Logo" width={60} height={60} />
                        
                    </div>
                   
                    <div className="w-full h-[400px] space-y-8">
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={item.link} className={`w-full ${pathname === item.link ? "text-gray-900" : "text-gray-400"} flex space-x-5 items-center`}>
                                
                                    <motion.p whileHover={{ scale: 1.1 }} className={`text-xl `}>{item.icon}</motion.p>
                                    <motion.p whileHover={{ scale: 1.1 }} className="hidden md:inline-block font-semibold ">{item.name}</motion.p>
                               
                            </Link>
                        ))}

                        <button className="bottom-10 px-8 flex items-center font-semibold left-0  text-gray-400 absolute" onClick={() => {}}>
                            <FiLogOut fontWeight="700" /> 
                            <p className='ml-5'>Logout</p>
                        </button>
                    </div>
                </div>
            </motion.div>

            <div  className="mt-20 px-0 md:px-8 h-full flex-grow ml-0 md:ml-[240px] p-0 md:p-4">
                 
                <DashboardNavigation noOfTests={"4"} />
                <div  className='outline-none bg-transparent border-none'>
                   <button aria-label='btn' onClick={onClose} className={hamburgerOpen ? "absolute w-full h-[calc(100%-72px)] z-40 bg-black/65" : "absolute"}></button>
                    {children}
                </div>
            </div>
        </div>
    );
}
