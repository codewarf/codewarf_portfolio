import "./styles/theme.css";
import { useEffect } from "react";
import { PixelBackground } from "./components/PixelBackground";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] relative overflow-x-hidden">
      <PixelBackground />

      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--pixel-pink)] via-[var(--pixel-purple)] via-[var(--pixel-blue)] to-[var(--pixel-cyan)] opacity-50 pointer-events-none" />
    </div>
  );
}