import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* HEADING */}
      <div className="text-center mb-12">
        <p className={styles.sectionSubText}>Technologies I Use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>

      {/* TECH ICONS */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
