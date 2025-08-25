"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-3 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-[33px] border border-gray-200 bg-white/70 shadow-lg backdrop-blur-md transition-all duration-300 md:w-[90%]"
      style={{
        maxHeight: open ? "150px" : "66px",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col px-4 transition-all duration-300 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Track My Course Logo"
              width={36}
              height={36}
            />
            <span className="font-poppins text-primary-red ml-2 text-lg leading-tight font-bold tracking-tight md:text-2xl">
              Track My Course
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/#features"
              className="hover:text-primary-red-dark font-medium text-gray-700 transition"
            >
              Features
            </Link>
            <Link
              href="/contribute"
              className="hover:text-primary-red-dark font-medium text-gray-700 transition"
            >
              Contribute
            </Link>
          </div>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <Link
              href="#"
              className="flex shrink-0 transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 pr-2 text-sm font-medium text-white shadow-sm shadow-red-400/30 transition-transform hover:scale-101 hover:from-red-700 hover:to-pink-700"
            >
              <span className="rounded-full bg-white p-0.5 shadow-sm">
                <Image
                  src="/chromeLogo.svg"
                  alt="Chrome Logo"
                  width={32}
                  height={32}
                />
              </span>
              <span className="flex size-5 items-center justify-center lg:hidden">
                <Download size={18} />
              </span>
              <span className="hidden lg:inline">
                {/* Add to Chrome{" "} */}
                Coming Soon
                {/* <span className="hidden lg:inline">- It's Free</span> */}
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              className="rounded-full p-2 transition hover:bg-gray-100 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="size-6 text-gray-700" />
              ) : (
                <Menu className="size-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile links */}
        <div
          className={`flex flex-col space-y-3 pt-2 pb-4 transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Link
            href="/#features"
            className="hover:text-primary-red-dark font-medium text-gray-700 transition"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/contribute"
            className="hover:text-primary-red-dark font-medium text-gray-700 transition"
            onClick={() => setOpen(false)}
          >
            Contribute
          </Link>
        </div>
      </div>
    </nav>
  );
}
