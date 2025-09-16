"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Flag, LogOut, Settings, House } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const getLinkClass = (href: string) => {
    return pathname === href
      ? "flex items-center space-x-3 px-3 py-2 rounded-md bg-[#6C63FF] text-white"
      : "flex items-center space-x-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200";
  };

  return (
    <aside className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col p-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/images/app_logo.png"
          alt="App Logo"
          width={400}
          height={135}
          className="mb-2"
        />
      </div>

      <hr className="border-t-2 border-[#E0DEFF] rounded-full my-6" />

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-[#CCC9FF] flex items-center justify-center text-[#6C63FF] font-semibold">
          AU
        </div>
        <div>
          <p className="font-semibold text-gray-900">Admin User</p>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>
      </div>

      <hr className="border-t-2 border-[#E0DEFF] rounded-full my-6" />

      {/* Menu */}
      <nav className="flex-1">
        <p className="text-[#6C63FF] font-semibold mb-2">Menu</p>
        <ul className="space-y-2 mb-6">
          <li>
            <Link href="/home" className={getLinkClass("/home")}>
            <House size={16}></House>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/reports" className={getLinkClass("/reports")}>
            <Flag size={16}></Flag>
              <span>Reports</span>
            </Link>
          </li>
        </ul>

        <p className="text-[#6C63FF] font-semibold mb-2">General</p>
        <ul className="space-y-2">
          <li>
            <Link href="/settings" className={getLinkClass("/settings")}>
            <Settings size={16}></Settings>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/" className={getLinkClass("/")}>
              <LogOut size={16}></LogOut>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}