"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <button onClick={onClose} className="mb-4">
            <X className="h-6 w-6 text-primary" />
          </button>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              Portfolio
            </Link>
            <Link
              href="#blog"
              className="text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              Contact
            </Link>
          </nav>
          <Button className="mt-6 w-full bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
