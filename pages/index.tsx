import React, { useState } from "react";
import WelcomeUser from "@/components/WelcomeUser";
import Navbar from "@/components/Navbar";
import { Movie } from "../types";



export default function Home() {
  const [currentView, setCurrentView] = useState<"Home" | "Other" | "Other">("Home");
  
  return (
    <>
    <Navbar onSelect={setCurrentView} />
    <main>
      {currentView === "Home" && <WelcomeUser />}
    </main>
    </>
  );
  
}