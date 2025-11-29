"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MiniCart from "./MiniCart";

export default function HeaderActions() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // فقط بعد از mount در مرورگر
  useEffect(() => {
    setMounted(true);
  }, []);

  // در SSR هیچی نشون نده
  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      {/* حساب کاربری */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-blue-700 cursor-pointer hover:text-blue-950"
          >
            <User className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-blue-950">حساب کاربری</TooltipContent>
      </Tooltip>

      {/* سبد خرید */}
      <Link href={"/cart"}>
        <MiniCart />
      </Link>

      {/* تغییر تم */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hover:text-primary cursor-pointer"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>تغییر تم</TooltipContent>
      </Tooltip>
    </div>
  );
}
