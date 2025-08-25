"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="radial-gradient-bg relative bg-white pt-32 pb-8 lg:pt-40">
      <div className="bg-dots pointer-events-none absolute inset-0"></div>
      <div className="absolute bottom-0 h-10 w-full bg-linear-to-b from-transparent to-white"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:px-8">
        {/* Left side: Text Content */}
        <div className="flex-1 text-center lg:min-w-lg lg:text-left">
          <h1 className="font-poppins text-center text-4xl leading-snug font-bold md:text-5xl lg:text-left lg:text-6xl">
            <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Turn{" "}
            </span>
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
              YouTube Playlists
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              into Structured Courses.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Track your progress, see your{" "}
            <Link
              href="#feature-invested-time"
              className="relative inline-block font-normal hover:opacity-80"
            >
              <strong className="border-b-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text font-normal text-transparent">
                invested time
              </strong>
              <span className="absolute bottom-[3px] left-0 h-[1px] w-full bg-gradient-to-r from-pink-500 to-red-500"></span>
            </Link>
            , and finish more courses than ever before.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#"
              aria-label="Add TrackMyCourse Chrome Extension"
              className="flex h-12.5 shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-4 py-0.5 text-base font-medium text-nowrap text-white shadow-sm shadow-red-400/30 transition-transform hover:scale-102 hover:from-red-700 hover:to-pink-700"
            >
              <span className="rounded-full bg-white p-0.5 shadow-sm">
                <Image
                  src="/chromeLogo.svg"
                  alt="Chrome Logo"
                  width={32}
                  height={32}
                />
              </span>
              {/* Add to Chrome */}
              Coming Soon
            </Link>

            <Link
              href="/#features"
              aria-label="View TrackMyCourse Features"
              className="border-primary-red/30 text-primary-red hover:bg-primary-red/5 hover:border-primary-red/60 h-12.5 shrink-0 rounded-full border bg-white px-6 py-3 text-base font-medium text-nowrap transition"
            >
              View Features
            </Link>
          </div>
          <div className="mt-4 flex justify-center lg:justify-start">
            <a
              href="https://github.com/AlokYadavCodes/track-my-course"
              aria-label="TrackMyCourse open-source code on GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="-0.5 inline-flex items-center rounded-full border border-gray-300 px-3 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:scale-101 hover:border-pink-500 hover:text-pink-600 hover:shadow-md"
            >
              <svg
                className="mr-2 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
              Open Source on GitHub
            </a>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            100% Free — No signup required.
          </p>
        </div>

        {/* Right side: Visual */}
        <div className="pointer-events-none flex items-center justify-center sm:max-w-xl">
          <div className="relative mt-8 aspect-video w-full flex-1 rounded-3xl lg:mt-0">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-gray-900/10 to-gray-700/10 shadow-2xl blur-2xl"></div>
            <div className="absolute -inset-[2px] z-0 rounded-3xl bg-gradient-to-r from-red-700 to-pink-700 opacity-80 blur-sm"></div>
            <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-4 ring-slate-100">
              <video
                src="/promo_hero.webm"
                className="h-full w-full object-cover"
                loop
                autoPlay
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
