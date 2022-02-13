import Head from "next/head";
import Navigation from "../Components/HomeComps/Navigation";
import AboutUs from "../Components/LearnMoreComps/AboutUs";
import LearnMoreHero from "../Components/LearnMoreComps/LearnMoreHero";
import Team from "../Components/LearnMoreComps/Team";
import Recognized from "../Components/HomeComps/Recognized";
import Faq from "../Components/HomeComps/Faq";
import Footer from "../Components/HomeComps/Footer";
import LearnMoreFaq from "../Components/LearnMoreComps/LearnMoreFaq";

const learnMore = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title>Learn More | Gastos | Pay Below The Bill With Gastos</title>
      </Head>
      <div className="bg-black-section bg-text" style={{ overflowX: "hidden" }}>
        <Navigation />
        <LearnMoreHero />
        <AboutUs />
        <Team />
        <Recognized />
        {/* <Faq /> */}
        <LearnMoreFaq />
        <Footer />
      </div>
    </>
  );
};

export default learnMore;
