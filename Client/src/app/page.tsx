import type { Metadata } from "next";
import Slider from "@/components/Slider";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">


      <section aria-label="Navbar Section">
        <Navbar></Navbar>
      </section>
      <section aria-label="Homepage Banner">
        <Slider />
      </section>




    </main>
  );
}
