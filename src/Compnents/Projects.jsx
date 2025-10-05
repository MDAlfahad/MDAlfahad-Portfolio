import React from "react";
import { Element } from "react-scroll";
import MagicBento from "../animation/MagicBento";

const Projects = () => {
  return (
    <Element name="project" className="bg-green-200 py-40 w-full items-center justify-center flex">
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="102,187,106"
      />
    </Element>
  );
};

export default Projects;
