import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MissionVision } from "./components/MissionVision";
import { WhatWeDo } from "./components/WhatWeDo";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { GridBackground } from "./components/GridBackground";
import { Routes, Route } from "react-router";
import { AnchorProjectPage } from "./pages/projects/AnchorProjectPage.tsx";
import { VerdentProjectPage } from "./pages/projects/VerdentProjectPage.tsx";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <GridBackground />
      <Navigation />

      <main className="relative z-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <MissionVision />
                <WhatWeDo />
                <Achievements />
                <Projects />
                <Team />
                <Contact />
              </>
            }
          />
          <Route path="/projects/anchor" element={<AnchorProjectPage />} />
          <Route path="/projects/verdent" element={<VerdentProjectPage />} />
        </Routes>
      </main>
    </div>
  );
}