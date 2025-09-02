import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-54 text-center">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-gradient-to-tr from-red-100 to-pink-100 opacity-30"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-3xl space-y-6 px-4">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Have questions or want to reach me personally? Contact via email or connect through my social profiles.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:alokkumaryadav.cse@gmail.com"
              className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
            >
              Email Support
            </a>
            <a
              href="https://x.com/AlokCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-primary-red/30 border px-6 py-3 font-semibold text-primary-red transition hover:bg-primary-red/5 hover:border-primary-red/60"
            >
              X / Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/alokyadavcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-primary-red/30 border px-6 py-3 font-semibold text-primary-red transition hover:bg-primary-red/5 hover:border-primary-red/60"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
