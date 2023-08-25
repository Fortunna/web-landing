import React from "react";
import Particles from "react-tsparticles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadBigCirclesPreset(tsParticles);
}

export default function App() {
  return (
    <div className="overflow-hidden">
      <Particles
        id="tsparticles"
        options={{
          speed: 10,
          preset: "big-circles",

          fullScreen: {
            enable: false,
          },
        }}
        init={particlesInit}
      />
    </div>
  );
}
