import React from "react";
import Navbar from "./Navbar";
import First from "./HomePage_Partials/First";
// import FeaturesZigzag from "./HomePage_Partials/FeaturesZigZag";

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <First />
      {/* <FeaturesZigzag images={[feature1, feature2, feature3]} /> */}
    </div>
  );
}

export default HomePage;
