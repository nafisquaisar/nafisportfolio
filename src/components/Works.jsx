import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, playstore } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* ================= PROJECT CARD ================= */
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  playstore_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      {/* 🔴 Tilt REMOVED, normal div used */}
      <div className="bg-tertiary p-4 rounded-2xl sm:w-[320px] w-full hover:scale-105 transition-transform duration-300">
        
        {/* IMAGE */}
        <div className="relative w-full overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain"
          />

          {/* ICONS */}
          <div className="absolute top-2 right-2 flex gap-2 z-10">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer p-2"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {playstore_link && (
              <div
                onClick={() => window.open(playstore_link, "_blank")}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer p-2"
              >
                <img
                  src={playstore}
                  alt="playstore"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-4">
          <h3 className="text-white font-semibold text-[18px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] leading-[22px]">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ================= WORKS SECTION ================= */
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[28px]"
      >
        These are real-world Android applications built with Kotlin,
        MVVM architecture, Firebase, and modern Android practices.
        Some of them are live on the Google Play Store.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
