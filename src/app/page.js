import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InAction from "@/components/InAction";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <p className="sr-only">
          TrackMyCourse is a free YouTube playlist progress tracker that turns playlists into structured courses and tracks your learning progress from start to finish.
        </p>
        <Hero />
        <Features />
        <InAction />
        <FAQ />
      </main>
    </>
  );
}
