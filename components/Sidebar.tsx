"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      <div className="flex items-center space-x-2 mb-8">
        <Image src='/assets/images/app_logo.png' alt="App Logo"
          width={400}
          height={135}
          className="mb-6"></Image>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-[#CCC9FF] flex items-center justify-center text-[#6C63FF] font-semibold">
          AU
        </div>
        <div>
          <p className="font-semibold text-gray-900">Admin User</p>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        <p className="text-[#6C63FF] font-semibold mb-2">Menu</p>
        <ul className="space-y-2 mb-6">
          <li>
            <Link
              href="/home"
              className={getLinkClass("/home")}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
                />
              </svg>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/reports"
              className={getLinkClass("/reports")}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17v-6a2 2 0 012-2h6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7h6v6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 17h6v-6a2 2 0 012-2h6"
                />
              </svg>
              <span>Reports</span>
            </Link>
          </li>
        </ul>

        <p className="text-[#6C63FF] font-semibold mb-2">General</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/settings"
              className={getLinkClass("/settings")}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                />
              </svg>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={getLinkClass("/")}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16v-1a4 4 0 014-4h1"
                />
              </svg>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
