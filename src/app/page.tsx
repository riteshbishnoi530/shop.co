import Brands from "@/components/Brands";
import Footer from "@/components/common/Footer";
import DressStyle from "@/components/DressStyle";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrivel";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Brands/>
    <NewArrival/>
    <DressStyle/>
    <Footer/>
    </>
  );
}
