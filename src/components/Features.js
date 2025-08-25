import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    eyebrow: "PROGRESS TRACKING",
    title: "Always Know Where to Resume",
    description:
      "Check off each video as you finish it to see your progress grow. Stay organized and always know exactly where to resume.",
    details: [
      "Mark each video as watched for clear progress",
      "See your overall course completion at a glance",
      "Jump back into the next lesson instantly",
    ],
    visual: "/promo_feature_1.webm",
    layout: "right",
  },

  {
    eyebrow: "VISUAL MOTIVATION",
    title: "See Your Progress, Stay Inspired",
    description:
      "See your progress in real time with completion bars. Watch your course fill up and stay motivated to finish.",
    details: [
      "Watch your completion bar grow in real time",
      "Compare total vs. watched time instantly",
      "Visual indicators that keep you motivated",
    ],
    visual: "/promo_feature_2.webm",
    layout: "left",
  },

  {
    eyebrow: "SMART ORGANIZATION",
    title: "Your Courses, Neatly Organized",
    description:
      "Playlists are organized into Ongoing and Completed. Instantly find where you left off and track your learning.",
    details: [
      "Check your course status at a glance",
      "Easily toggle between Ongoing and Completed",
      "Always know where you left off",
    ],
    visual: "/promo_feature_3.webm",
    layout: "right",
  },

  {
    id: "feature-invested-time",
    eyebrow: "INVESTED TIME",
    title: "Track Your True Learning Time",
    description:
      "Invested Time measures all the time you spend on a playlist — watching, pausing, taking notes, or reflecting — for a true picture of your learning effort.",
    details: [
      "See total time spent on the playlist, not just video length",
      "Include pauses, notes, and replays in your learning time",
      "Understand your true study effort",
    ],
    visual: "/promo_feature_4.webm",
    layout: "left",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-gray-100 py-16 lg:py-24">
      <div className="bg-square pointer-events-none absolute inset-0" />
      <div className="absolute top-0 h-10 w-full bg-linear-to-t from-transparent to-white"></div>
      <div className="absolute bottom-0 h-10 w-full bg-linear-to-b from-transparent to-white"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need to Learn Effectively on YouTube.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-snug text-gray-600 lg:leading-normal">
            Your playlists deserve better. Here’s how we upgrade YouTube
            learning.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="mt-10 space-y-16">
          {features.map((feature, index) => (
            <div
              id={feature.id}
              key={index}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl lg:p-12"
            >
              <div className="absolute inset-0 z-0 [background-image:radial-gradient(circle_at_15%_20%,rgba(220,30,30,0.05),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(253,226,212,0.1),transparent_40%)] blur-[120px] filter"></div>

              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div
                  className={feature.layout === "left" ? "lg:order-last" : ""}
                >
                  <div>
                    <p className="relative isolate inline-block px-3 py-1 font-semibold tracking-wider text-red-500 uppercase">
                      <span className="pointer-events-none absolute inset-0 z-0 -m-4 rounded-lg bg-[radial-gradient(closest-side,rgba(239,68,68,0.55),transparent_70%)] blur-2xl" />
                      <span className="relative z-10">{feature.eyebrow}</span>
                    </p>
                  </div>

                  <h3 className="font-poppins relative mt-4 inline-block text-2xl font-bold text-gray-900 sm:text-3xl">
                    {feature.title}
                    <span className="absolute top-0 left-0 -ml-2 h-full w-[2px] rounded-full bg-red-500"></span>
                  </h3>

                  <div className="relative pb-6">
                    <p className="mt-4 text-lg leading-snug text-gray-600 lg:leading-normal">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2
                          size={20}
                          className="shrink-0 text-green-500"
                        />
                        <span className="ml-3 leading-tight text-gray-700 lg:leading-normal">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Content */}
                <div className="pointer-events-none flex justify-center">
                  <div className="relative aspect-video w-full rounded-3xl sm:max-w-xl lg:max-w-none">
                    <div className="absolute -inset-[2px] z-0 rounded-3xl bg-gradient-to-r from-red-700 to-pink-700 opacity-40 blur-sm"></div>

                    <div className="relative z-10 h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg ring-4 ring-slate-100">
                      <video
                        src={feature.visual}
                        className="h-full w-full object-cover"
                        loop
                        autoPlay
                        muted
                        playsInline
                        aria-label={`${feature.title} demonstration video`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
