import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InAction from "@/components/InAction";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <p className="sr-only">
          TrackMyCourse is a free Chrome extension that converts YouTube
          playlists into structured courses, tracks your progress, and helps you
          finish faster.
        </p>
        <Hero />
        <Features />
        <InAction />
        <FAQ />
      </main>
    </>
  );
}
