import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-white py-36 md:py-40 text-center">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-gradient-to-tr from-red-100 to-pink-100 opacity-30"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" }}
          ></div>
        </div>
        <div className="relative mx-auto max-w-3xl px-4 space-y-6">
          <h1 className="font-poppins text-4xl font-bold text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your privacy is important. This policy explains how Track My Course handles your data.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 space-y-12">
          <div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900">
              Data We Collect
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              Track My Course stores only your course progress, video timestamps, and notes locally in your browser. No personal information such as your name or email is collected.
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900">
              How We Use Your Data
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              All your progress and notes remain on your device. They are used only to help you track your learning and enhance your experience.
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900">
              Third-Party Services
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              Track My Course does not send any personal data to third-party services. Any links to external platforms are for convenience only.
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900">
              Your Rights
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              Since all data is stored locally, you have full control. You can clear your browser data to remove any saved progress or notes at any time.
            </p>
          </div>

          <div>
            <h2 className="font-poppins text-2xl font-semibold text-gray-900">
              Questions?
            </h2>
            <p className="mt-2 text-gray-600 md:text-lg">
              If you have any questions regarding your privacy, please reach out via email at 
              <a href="mailto:trackmycourse1@gmail.com" className="text-red-600 hover:underline"> trackmycourse1@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
