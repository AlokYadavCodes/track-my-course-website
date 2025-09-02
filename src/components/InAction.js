import React from "react";
import Link from "next/link";

const steps = [
  {
    title: "Open Any YouTube Playlist",
    description:
      "No setup needed — open any playlist and see it instantly organized for you.",
  },
  {
    title: "See Your Playlist Come to Life",
    description:
      "Your playlist transforms with progress bars, stats, and interactive checkboxes that clearly show your learning journey.",
  },
  {
    title: "Track Your Learning Wins",
    description:
      "Check off each video as you complete it — monitor your progress, celebrate milestones, and keep moving forward effortlessly.",
  },
];

export default function InAction() {
  return (
    <section id="in-action" className="bg-slate-50 pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 sm:text-4xl">
            Turn Any YouTube Playlist into a Seamless Learning Journey.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-snug text-gray-600 md:leading-normal">
            Watch your playlists transform with progress bars, checkmarks, and
            visual cues that keep you learning effortlessly.
          </p>
        </div>

        {/* Video Container */}
        <div className="pointer-events-none mt-12 flex justify-center">
          <div className="relative aspect-video w-full rounded-3xl sm:max-w-xl lg:max-w-3xl">
            <div className="absolute -inset-[2px] z-0 rounded-3xl bg-gradient-to-r from-red-700 to-pink-700 opacity-80 blur-sm"></div>

            <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-4 ring-slate-100">
              <video
                src="./promo_hero.webm"
                className="h-full w-full object-cover"
                loop
                autoPlay
                muted
                playsInline
                aria-label="Demo of TrackMyCourse showing YouTube playlist progress tracking"
              />
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-x-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-primary-red-dark relative m-2 mb-8 flex flex-col items-center rounded-3xl border-1 text-center transition-transform hover:scale-101 hover:shadow-lg md:items-start"
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `
      radial-gradient(circle at 50% 0%, rgba(220, 30, 30, 0.08), transparent 50%)
    `,
                }}
              ></div>

              <div className="before:bg-primary-red after:bg-primary-red absolute left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-pink-600 before:absolute before:right-full before:h-0.5 before:w-full before:content-[''] after:absolute after:left-full after:h-0.5 after:w-full after:content-['']">
                <span className="font-poppins text-xl font-bold text-white">
                  {index + 1}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-poppins text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="my-2 px-1 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative text-center">
          <div className="bg-square absolute h-full w-full"></div>
          <div className="relative py-16 md:py-24">
            <h3 className="font-poppins text-2xl font-bold text-gray-900">
              Ready to transform your YouTube playlists?
            </h3>
            <p className="mt-2 text-lg leading-tight text-gray-600 md:leading-normal">
              Turn every video in your YouTube playlist into a step forward — start tracking your learning today.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="https://chromewebstore.google.com/detail/trackmycourse-track-youtu/eojbembojnleniamokihimgjikmpahin"
                aria-label="Add TrackMyCourse Chrome Extension"
                className="rounded-full bg-gradient-to-r from-red-600 to-pink-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:from-red-700 hover:to-pink-700 hover:shadow-xl"
              >
                Add to Chrome
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
