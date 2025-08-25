import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label="Track My Course Homepage"
              className="flex items-center space-x-2"
            >
              <Image
                src="/logo.svg"
                alt="Track My Course Logo"
                width={32}
                height={32}
              />
              <span className="font-poppins text-xl font-bold text-gray-900">
                Track My Course
              </span>
            </Link>
            <p className="max-w-xs text-gray-600">
              Turn YouTube playlists into structured courses.
            </p>
          </div>

          {/* Column 2: Links */}
          <nav className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text font-medium text-transparent hover:opacity-80"
                  >
                    {/* Add to Chrome */}
                    Coming Soon
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="hover:text-primary-red text-gray-600"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="hover:text-primary-red text-gray-600"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary-red text-gray-600"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contribute"
                    className="hover:text-primary-red text-gray-600"
                  >
                    Contribute
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-primary-red text-gray-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Track My Course. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link
              href="https://github.com/AlokYadavCodes/track-my-course"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://x.com/AlokCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
              aria-label="X / Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alokyadavcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
