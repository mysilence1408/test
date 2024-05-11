"use client";
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import NavigationBar from "@/components/NavigationBar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        <Navbar />
        {children}
        <NavigationBar />
      </div>
    </NextUIProvider>
  );
}
