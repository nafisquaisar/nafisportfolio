import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import computer from "../assets/computer.png";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { ComputersCanvas } from "./canvas";

// ===== SERVICE CARD =====
const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.6)}
    className="xs:w-[220px] w-full"
  >
    <div className="w-full p-[1px] rounded-[16px] green-pink-gradient hover:scale-105 transition-transform duration-300">
      <div className="bg-tertiary rounded-[16px] py-4 px-6 min-h-[220px] flex flex-col items-center justify-center">
        <img src={icon} alt={title} className="w-12 h-12 mb-4" />
        <h3 className="text-white text-[16px] font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
);

// ===== ABOUT SECTION =====
const About = () => {
  return (
    <section className="w-full flex flex-col gap-20">

      {/* ================= UPPER PART ================= */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        
        {/* LEFT → DESCRIPTION */}
        <div className="flex-1">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] max-w-xl leading-[28px]"
          >
            I’m an Android Developer focused on building clean, scalable, and
            production-ready mobile applications using Kotlin, MVVM
            architecture, Firebase, and modern Android components.
            <br /><br />
            Along with Android development, I also work with Flutter and UI/UX
            design to create smooth, user-friendly interfaces. I enjoy solving
            real-world problems and delivering high-quality apps.
          </motion.p>
        </div>

        {/* RIGHT → COMPUTER */}
        {/* <div className="w-full lg:flex-1 h-[280px] sm:h-[340px] lg:h-[420px]">
          <ComputersCanvas />
        </div> */}


          {/* RIGHT → IMAGE */}
<div className="perspective-[1000px]">



<motion.img
  src={computer}
  className="max-w-[420px] w-full object-contain"
  initial={{ opacity: 0, y: 40, rotateX: -10 }}
  animate={{
    opacity: 1,
    y: [0, -8, 0],
    rotateX: [0, 3, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    rotateX: 10,
    rotateY: -12,
    scale: 1.05,
  }}
/>




</div>





      </div>

      {/* ================= LOWER PART ================= */}
      <div className="flex flex-wrap gap-8 justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(About, "about");
