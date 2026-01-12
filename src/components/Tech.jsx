import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* HEADING */}
      <div className="text-center mb-12">
        <p className={styles.sectionSubText}>Technologies I Use</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </div>

      {/* TECH ICONS */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            style={{
              animation: "float 4s ease-in-out infinite",
              animationDelay: `${index * 0.25}s`,
            }}
            className="w-24 h-24 rounded-full 
                       bg-white
                       p-3
                       overflow-hidden
                       shadow-lg
                       hover:scale-105
                       transition-transform duration-300"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

// ============ For Ball =======================

//import { BallCanvas } from "./canvas";

// <div className="flex flex-row flex-wrap justify-center gap-10">
//         {technologies.map((technology) => (
//           <div className="w-28 h-28" key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>