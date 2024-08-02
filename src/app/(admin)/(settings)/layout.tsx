"use client"

import Link from 'next/link';
import { IconType } from 'react-icons';
import { FiSettings  } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment, MdNotificationAdd } from "react-icons/md";
import { Sidebar } from "@/layout/sidebar";
import { usePathname } from 'next/navigation';

export const RouteTitleMatch:Record<string, string> = {
    "/billings": "Billing and Payment",
    "/account": "Account Profile",
    "/notifications": "Notifications",
    "/settings": "Account Settings",
}

interface RenderListProps {
    href: string;
    icon: IconType;
    text: string;
}

const RenderList: React.FC<RenderListProps> = ({ href, icon: Icon, text }) => {
    return (
        <li>
            <Link href={href} passHref>
                <div className="flex items-center px-2 py-4 hover:bg-gray-200 rounded-md ">
                    <Icon className="h-6 w-6 mr-3 text-gray-600" />
                    <span className="text-gray-800 text-[15px]">{text}</span>
                </div>
            </Link>
        </li>
    );
};

export default function QuizInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const titleName: string = usePathname();

  return (
      <Sidebar>
          {/*  put tjhe navigation bar on these layout pages on the folder, since they cannot be accessed unless logged in.  */}
            <div>
                {/* header */}
                <div className="flex w-full items-center mb-6 -mt-2">
                  <div>
                      <h2 className='font-semibold text-lg md:text-xl'>{ RouteTitleMatch[titleName] }</h2>
                  </div>
                </div>

                {/* body */}
                <div className="flex items-start">
                    <div className='pr-8'>
                        {/* left bar */}
                        {/* <h2 className="font-semibold text-lg md:text-xl ">Account Settings</h2> */}

                        <div className="w-72 h-fit bg-gray-100 py-5">
                            <ul className="space-y-2 ">
                                <RenderList href="/account" icon={CgProfile} text="Account Profile" />
                                <RenderList href="/billings" icon={MdOutlinePayment} text="Billing" />
                                <RenderList href="/settings" icon={FiSettings} text="Account Settings" />
                                {/* <RenderList href="/notifications" icon={MdNotificationAdd} text="Notifications" /> */}
                            </ul>
                        </div>

                        <div className="bg-gray-300 mt-6 h-[1px] w-full"></div>
                    </div>

                    <div className='w-[calc(100%-20rem)]'>
                        {/* other bar */}
                        {children}
                    </div>
                </div>
            </div>
        </Sidebar>
  );
}

