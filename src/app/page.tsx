import Brands from "@/components/Brands";
import Footer from "@/components/common/Footer";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrivel";
import TopSelling from "@/components/TopSelling";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Brands/>
    <NewArrival/>
    <TopSelling/>
    <DressStyle/>
    <HappyCustomers/>
    <Footer/>
    </>
  );
}
