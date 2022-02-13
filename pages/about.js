import Head from "next/head";
import AboutFaq from "../Components/AboutComps/AboutFaq";
import AboutHero from "../Components/AboutComps/AboutHero";
import BrandingBusiness from "../Components/AboutComps/BrandingBusiness";
import Feature from "../Components/AboutComps/Feature";
import Support from "../Components/AboutComps/Support";
import ThreeSteps from "../Components/AboutComps/ThreeSteps";
import Uses from "../Components/AboutComps/Uses";
import Visitor from "../Components/AboutComps/Visitor";
import Footer from "../Components/HomeComps/Footer";
import Navigation from "../Components/HomeComps/Navigation";

function about({
  variant = "light",
  style = { color: "#000000", textDecoration: "none", padding: "5px" },
  navClassName = "navLinkStyleDark",
}) {
  return (
    <>
      <Head>
        <title>
          Become a Provider | Gastos | Pay Below The Bill With Gastos
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white-text">
        <Navigation variant={variant} className={navClassName} />
        <AboutHero />
        <Visitor />
        <BrandingBusiness />
        <ThreeSteps />
        <Feature />
        <Uses />
        <Support />
        <AboutFaq />
        <Footer style={style} />
      </div>
    </>
  );
}

export default about;
