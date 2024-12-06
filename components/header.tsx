"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Code X Sol" width={40} height={40} />
              <span className="text-primary text-xl font-bold">Code X Sol</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-primary">
                About
              </Link>
              <Link
                href="#portfolio"
                className="text-gray-600 hover:text-primary"
              >
                Portfolio
              </Link>
              <Link href="#blog" className="text-gray-600 hover:text-primary">
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-primary"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
              <Menu
                className="h-6 w-6 text-primary md:hidden cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
