import React, { useState } from "react";
import WelcomeUser from "@/components/WelcomeUser";
import Navbar from "@/components/Navbar";
import GameLibrary from "@/components/GameLibrary";



export default function Home() {
  const [currentView, setCurrentView] = useState<"Home" | "Games">("Home");
  
  // navbar used to select component
  return (
    <>
    <Navbar onSelect={setCurrentView} /> 
    <main>
      {currentView === "Home" && <WelcomeUser />}
      {currentView === "Games" && <GameLibrary />}
      
    </main>
    </>
  );
  
}
