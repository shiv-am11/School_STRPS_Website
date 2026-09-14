import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import InfrastructureSection from "./components/InfrastructureSection";
import ActivitiesSection from "./components/ActivitiesSection";
import AdmissionCTA from "./components/AdmissionCTA";
import UpdatesSection from "./components/UpdatesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <AboutSection />

        <FeaturesSection />

        <InfrastructureSection />

        <ActivitiesSection />

        <AdmissionCTA />

        <UpdatesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;