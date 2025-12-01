"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo/Logo.png";
import HeaderActions from "./HeaderActions";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";

export default function Header() {
  const [opacity, setOpacity] = useState(0.95); // شفافیت اولیه نزدیک به بک‌گراند بادی

  useEffect(() => {
    const maxScroll = 300; // حداکثر اسکرول که اثر کامل شود
    const minOpacity = 0.8; // حد پایین شفافیت، نزدیک رنگ بادی

    const handleScroll = () => {
      const scrollY = window.scrollY;
      // محاسبه شفافیت تدریجی بر اساس میزان اسکرول
      const newOpacity =
        0.95 - ((0.95 - minOpacity) * Math.min(scrollY, maxScroll)) / maxScroll;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 shadow-sm transition-all duration-150 backdrop-blur-md"
      style={{
        // استفاده از رنگ گلوبال --background با شفافیت متغیر
        backgroundColor: `hsla(var(--background), ${opacity})`,
      }}
    >
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
            <span className="sm:inline text-2xl text-logo-gradient">
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
