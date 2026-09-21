import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import InfrastructureSection from "./components/InfrastructureSection";
import ActivitiesSection from "./components/ActivitiesSection";
import AdmissionCTA from "./components/AdmissionCTA";
import UpdatesSection from "./components/UpdatesSection";
import Footer from "./components/Footer";

import Gallery from "./components/Gallery";

import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <InfrastructureSection />
      <ActivitiesSection />
      <AdmissionCTA />
      <UpdatesSection />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <Routes>
        {/* Main Website */}
        <Route path="/" element={<HomePage />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;