import "./App.css";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import { VoteSimulator } from "./components/VoteSimulator.jsx";
import { SFSSFeeSection } from "./components/SFSSFeeSection.jsx";
import { CGSSection } from "./components/CGSSection.jsx";
import { StakeSection } from "./components/StakeSection.jsx";
import { FAQSection } from "./components/FAQSection.jsx";
import { GetInvolvedSection } from "./components/GetInvolvedSection.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="App min-h-screen bg-background">
      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <VoteSimulator />
        <SFSSFeeSection />
        <CGSSection />
        <StakeSection />
        <FAQSection />
        <GetInvolvedSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
