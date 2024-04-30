import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="py-1">
      <Navbar />
      <Hero/>
      <div className="border-t border-black mx-10"/> 
      <Features/>
      <div className="border-t border-black mx-10"/> 
      <Portfolio/>
    </div>
  );
}
