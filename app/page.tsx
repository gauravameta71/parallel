import Image from "next/image";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Details from "./components/Details";
import Careers from "./components/Careers";
import Awards from "./components/Awards";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Cards2 from "./components/Cards2";
import Brands from "./components/Brands";

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Brands/>
      <Details />
      <Careers />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Awards />
      <Cards2/>
    </>
  );
}
