"use client";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      {...props}
    >
      <TooltipProvider>{children} </TooltipProvider>
    </NextThemesProvider>
  );
}
