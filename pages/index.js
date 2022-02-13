import Head from "next/head";
import Navigation from "../Components/HomeComps/Navigation";
import Hero from "../Components/HomeComps/Hero";
import How from "../Components/HomeComps/How";
import GreenCard from "../Components/HomeComps/GreenCard";
import Benefits from "../Components/HomeComps/Benefits";
import Secure from "../Components/HomeComps/Secure";
import Uses from "../Components/HomeComps/Uses";
import Offer from "../Components/HomeComps/Offer";
import Recognized from "../Components/HomeComps/Recognized";
import Faq from "../Components/HomeComps/Faq";
import Footer from "../Components/HomeComps/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gastos | Pay Below The Bill With Gastos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-black-section bg-text">
        <Navigation />
        <Hero />
        <How />
        <GreenCard />
        <Benefits />
        <Secure />
        <Uses />
        <Offer />
        <Recognized />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
