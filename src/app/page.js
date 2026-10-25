import Image from "next/image";
import Hero from "./components/Hero";
import FitLogLibraries from "./components/FitLogLibraries";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      
      <div>
        <FitLogLibraries></FitLogLibraries>
      </div>
      
    </div>
  );
}
