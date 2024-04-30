import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="py-1">
      <Navbar />
      <Hero/>
      <div className="border-t border-black mx-10"/> 
      <Features/>
    </div>
  );
}
