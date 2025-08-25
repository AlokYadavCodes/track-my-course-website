import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <h1 className=" px-4 pt-28 text-3xl md:text-4xl font-bold text-center font-poppins text-gray-900 mb-12">
  Support Track My Course
</h1>


      {/* Donation Options */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-4 grid gap-12 md:grid-cols-2">
          {/* UPI Option */}
          <div className="flex flex-col items-center rounded-3xl border border-slate-200 p-8 text-center shadow-lg transition-transform hover:scale-101 bg-white">
            <span className="mb-4 text-5xl">📲</span>
            <h3 className="font-poppins text-2xl font-semibold text-gray-900">
              Donate via UPI
            </h3>
            <p className="mt-4 text-gray-600">
              Quick, free, and secure payments using any Indian UPI app.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="upi://pay?pa=paytoalokyadav@upi&pn=Track%20My%20Course&cu=INR"
                className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
              >
                Pay via UPI
              </Link>
              <div className="text-gray-500 text-sm">
                Or scan the QR code below to pay:
              </div>
              <Image
                src="/qr.webp"
                alt="UPI QR Code"
                className="mx-auto h-36 w-36"
              />
            </div>
          </div>

          {/* Global Option */}
          <div className="flex flex-col items-center rounded-3xl border border-slate-200 p-8 text-center shadow-lg transition-transform hover:scale-[1.02] bg-white">
            <span className="mb-4 text-5xl">🌍</span>
            <h3 className="font-poppins text-2xl font-semibold text-gray-900">
              Global Donations
            </h3>
            <p className="mt-4 text-gray-600">
              Support Track My Course from anywhere in the world via PayPal or Stripe.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="https://www.paypal.com/ncp/payment/ZBGMM8L8TGZ54"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-semibold text-white transition hover:from-red-700 hover:to-pink-700"
              >
                Donate via PayPal
              </Link>
              <Link
                href="https://buymeacoffee.com/alokcodes"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-primary-red/30 border px-6 py-3 font-semibold text-primary-red transition hover:bg-primary-red/5 hover:border-primary-red/60"
              >
                Buy Me a Coffee
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
