import React, { useState } from "react";
import WelcomeUser from "@/components/WelcomeUser";
import Navbar from "@/components/Navbar";
import { Game } from "@/types";
import GameLibrary from "@/components/GameLibrary";



export default function Home() {
  const [currentView, setCurrentView] = useState<"Home" | "Games" | "Other">("Home");
  
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
