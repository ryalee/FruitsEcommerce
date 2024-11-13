import Hero from "./components/Hero";
import InfoBanner from "./components/InfoBanner";
import InfoBanner2 from "./components/InfoBanner2";
import InfoBanner3 from "./components/InfoBanner3";
import Navbar from "./components/Navbar";
import OurMenu from "./components/OurMenu";
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main className=" flex flex-col overflow-x-hidden gap-8">
        <Navbar/>
        <Hero/>
        <OurMenu/>
        <InfoBanner/>
        <InfoBanner2/>
        <InfoBanner3/>
        <Footer/>
      </main>
    </>
  );
};