"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaTachometerAlt, FaClipboardList, FaTrophy, FaCog } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { usePathname } from 'next/navigation';


export const Sidebar = ({ children }: { children: React.ReactNode }) => {

    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/dashboard' },
        { name: 'Quiz', icon: <FaClipboardList />, link: '/quiz' },
        { name: 'Leaderboard', icon: <FaTrophy />, link: '/leaderboard' },
        { name: 'Settings', icon: <FaCog />, link: '/settings' },
    ]

    return (
        <div className="flex bg-[#f1f5f8] overflow-x-hidden min-h-screen ">
            <motion.div
                className="bg-white fixed top-0 left-0 dashboard h-full w-[50px] md:w-[214px] flex flex-col items-center"
                initial={{ width: 50 }}
                animate={{ width: ['50px', '210px', '250px'] }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col items-center w-full pt-10  relative h-full md:items-start p-4 space-y-4 flex-grow">
                    <div className="mb-10 w-full grid place-items-center">
                        <Image src="/logo.png" alt="Logo" width={60} height={60} />
                    </div>
                   
                    <div className="w-full h-[400px] grid place-items-center grid-cols-1 px-10">
                        {menuItems.map((item, index) => (
                            <Link href={item.link} key={index} className={`w-full ${pathname === item.link ? "text-gray-900" : "text-gray-400"} flex space-x-10 items-center`}>
                                
                                    <motion.p whileHover={{ scale: 1.1 }} className={`text-xl `}>{item.icon}</motion.p>
                                    <motion.p whileHover={{ scale: 1.1 }} className="hidden md:inline-block font-semibold ">{item.name}</motion.p>
                               
                            </Link>
                        ))}

                        <button className="bottom-10 px-5 flex items-center font-semibold left-10  space-x-10 text-gray-400 absolute" onClick={() => {}}>
                            <FiLogOut fontWeight="700" /> 
                            <p>Logout</p>
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="mt-20 px-8 h-full flex-grow ml-[50px] md:ml-[240px] p-4">
                {children}
            </div>
        </div>
    );
}
