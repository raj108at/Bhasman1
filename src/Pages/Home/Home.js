import React from "react";
import Intro from "../../components/Intro/Intro";
import ProductHighligt from "../../components/ProductHighlight/ProductHighligt";
import Slider from "../../components/Slider/Slider";
import Tools from "../../components/Tools/Tools";
import "./home.css";
function Home() {
  return (
    <div>
      <Slider />
      {/* <div class="box"></div> */}
      <Intro />
      <ProductHighligt />
      <Tools />
    </div>
  );
}

export default Home;
