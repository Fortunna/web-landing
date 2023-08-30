// import React from "react";
// import Particles from "react-tsparticles";
// import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";
// import Wave from "react-wavify";

// function particlesInit(tsParticles) {
//   console.log("init", tsParticles);

//   loadBigCirclesPreset(tsParticles);
// }

// export default function App() {
//   return (
//     <div className="overflow-hidden">
//       <Wave
//         fill="#f79902"
//         paused={false}
//         style={{ display: "flex" }}
//         options={{
//           height: 20,
//           amplitude: 20,
//           speed: 0.15,
//           points: 3,
//         }}
//       />
//     </div>
//   );
// }

import React from "react";
import Particles from "react-tsparticles";
import { loadBigCirclesPreset } from "tsparticles-preset-big-circles";

function particlesInit(tsParticles) {
  console.log("init", tsParticles);

  loadBigCirclesPreset(tsParticles);
}

export default function App() {
  return (
    <div className="overflow-hidden h-[60vh]">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
    </div>
  );
}
