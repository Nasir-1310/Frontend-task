import type { Metadata } from "next";
import Slider from "@/components/Slider";
import Navbar from "@/components/Navbar";
import ContinueWhereYouLeftOff from "@/components/ContinueWhereYouLeftOff";
import TaskFeedbackSection from "@/components/TaskFeedbackSection";
import AnnouncementsLeaderboard from "@/components/AnnouncementsLeaderboard";


export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <section aria-label="Navbar Section">
        <Navbar/>
      </section>
      <section aria-label="Homepage Banner">
        <Slider />
      </section>
      <section aria-label="Continue Where You Left Off Section">
       
        <ContinueWhereYouLeftOff />
      </section>
      <section aria-label="Additional Sections">
        <TaskFeedbackSection />
      </section>
      <section aria-label="Footer Section">
        <AnnouncementsLeaderboard/>
      </section>





    </main>
  );
}
