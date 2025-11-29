"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/Logo.png";
import HeaderActions from "./HeaderActions";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-neutral-800 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        {/* ردیف اصلی — RTL */}
        <div className="flex items-center justify-between gap-4">
          {/* لوگو + نام — چپ (اولین آیتم) */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={logo}
              alt="لوگوی شاپیکا"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
            <span className="sm:inline text-2xl font-medium text-red-700 dark:text-white">
              شاپیکا
            </span>
          </Link>

          {/* جستجو دسکتاپ — وسط */}
          <div className="hidden md:block flex-1 max-w-md mx-auto">
            <DesktopSearch />
          </div>

          {/* آیکون‌ها — راست (آخرین آیتم) */}
          <div className="flex items-center gap-2">
            <HeaderActions />
          </div>
        </div>

        {/* جستجو موبایل */}
        <div className="md:hidden mt-3">
          <MobileSearch />
        </div>
      </div>
    </header>
  );
}
