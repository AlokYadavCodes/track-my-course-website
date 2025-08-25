import React from "react";
import Link from "next/link";

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-36 text-center md:py-40">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-gradient-to-tr from-red-100 to-pink-100 opacity-30"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-3xl space-y-6 px-4">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Make Track My Course Even Better
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
            Contribute your skills or support financially — every bit helps
            improve learning for everyone.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="https://github.com/AlokYadavCodes/track-my-course"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
            >
              Contribute on GitHub
            </Link>
            <Link
              href="/donate"
              className="border-primary-red/30 text-primary-red hover:bg-primary-red/5 hover:border-primary-red/60 rounded-full border px-6 py-3 font-semibold transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Contribute */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-10 px-4 text-center">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 md:text-4xl">
            Why Your Support Matters
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
            Your contribution helps us improve Track My Course, keep it free,
            and create a better learning experience for everyone.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <span className="mb-2 text-4xl">🎓</span>
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Keep It Free
              </h3>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                Ensure Track My Course remains free and accessible to learners
                worldwide.
              </p>
            </div>

            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <span className="mb-2 text-4xl">⚡</span>
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Improve Features
              </h3>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                Contribute to better features, faster bug fixes, and a smoother
                experience.
              </p>
            </div>

            <div className="flex flex-col items-center transition-transform hover:scale-[1.03]">
              <span className="mb-2 text-4xl">🌍</span>
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                Enhance Learning
              </h3>
              <p className="mt-1 text-sm text-gray-600 md:text-base">
                Help create a more effective and structured YouTube learning
                experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Options */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 md:grid-cols-2">
          {/* Contribute Code */}
          <div className="flex flex-col items-center rounded-3xl border border-slate-200 p-8 text-center shadow-lg transition-transform hover:scale-[1.02]">
            <span className="mb-4 text-5xl">💻</span>
            <h3 className="font-poppins text-2xl font-semibold text-gray-900">
              Contribute Code
            </h3>
            <p className="mt-4 text-gray-600">
              Help improve Track My Course by fixing bugs, adding features, or
              improving documentation.
            </p>
            <Link
              href="https://github.com/AlokYadavCodes/track-my-course"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
            >
              View on GitHub
            </Link>
          </div>

          {/* Financial Support */}
          <div className="flex flex-col items-center rounded-3xl border border-slate-200 p-8 text-center shadow-lg transition-transform hover:scale-[1.02]">
            <span className="mb-4 text-5xl">❤️</span>
            <h3 className="font-poppins text-2xl font-semibold text-gray-900">
              Support Financially
            </h3>
            <p className="mt-4 text-gray-600">
              Help cover hosting, development, and maintenance costs. Every
              contribution, big or small, makes a difference.
            </p>
            <Link
              href="/donate"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl space-y-4 px-4">
          <h2 className="font-poppins text-3xl font-semibold text-gray-900">
            Ready to Contribute?
          </h2>
          <p className="text-gray-600">
            Choose the way that works best for you — improve the project or
            support financially, and help make learning better for everyone.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/AlokYadavCodes/track-my-course"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
            >
              Contribute on GitHub
            </Link>
            <Link
              href="/donate"
              className="border-primary-red/30 text-primary-red hover:bg-primary-red/5 hover:border-primary-red/60 rounded-full border px-6 py-3 font-semibold transition"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
