import React, { useState } from "react";
import MenuBar from "./MenuBar";
import Dashboard from "./Dashboard";

function MainContainer() {
  const [activeSection, setActiveSection] = useState("ecs_tourist_arrivals");

  const handleMenuSelection = (e) => {
    console.log("section", e.key);
    setActiveSection(e.key);
  };
  return (
    <div>
      <MenuBar
        handleMenuSelection={handleMenuSelection}
        activeSection={activeSection}
      ></MenuBar>
      <Dashboard activeSection={activeSection}></Dashboard>
    </div>
  );
}

export default MainContainer;
