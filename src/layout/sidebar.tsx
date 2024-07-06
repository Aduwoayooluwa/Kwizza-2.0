"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaTachometerAlt, FaClipboardList, FaTrophy, FaCog } from 'react-icons/fa';

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const menuItems = [
        { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/' },
        { name: 'Quiz', icon: <FaClipboardList />, link: '/quiz' },
        { name: 'Leaderboard', icon: <FaTrophy />, link: '/leaderboard' },
        { name: 'Settings', icon: <FaCog />, link: '/settings' },
    ];

    return (
        <div className="flex">
            <div className="bg-gray-200 fixed top-0 h-screen w-[50px] md:w-[250px] lg:w-[300px]">
                <motion.div
                    className="flex flex-col items-center md:items-start p-4 space-y-4"
                    initial={{ width: 50 }}
                    animate={{ width: ['50px', '250px', '300px'] }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-10">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    </div>
                    <div className="space-y-8">
                         {menuItems.map((item, index) => (
     <Link href={item.link} key={index}>
         <motion.div
             className="flex items-center space-x-2 cursor-pointer"
             whileHover={{ scale: 1.1 }}
         >
             <span className="text-xl">{item.icon}</span>
             <span className="hidden md:inline-block text-gray-700">{item.name}</span>
         </motion.div>
     </Link>
 ))}
 </div>
                </motion.div>
            </div>

            <div className="bg-white pt-20 px-10 flex-grow ml-[50px] md:ml-[250px] lg:ml-[300px] p-4">
                {children}
            </div>
        </div>
    );
}
