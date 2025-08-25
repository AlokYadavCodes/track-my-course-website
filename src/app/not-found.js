import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <h1 className="font-poppins text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600 md:text-xl">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
      >
        Go Back Home
      </Link>
    </main>
  );
}
