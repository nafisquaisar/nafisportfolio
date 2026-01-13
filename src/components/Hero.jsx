import { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const roles = [
  { text: "Android Developer", color: "text-emerald-400" },
  { text: "Flutter Developer", color: "text-sky-400" },
  { text: "UI / UX Designer", color: "text-pink-400" },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex].text;
    let timeout;

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 80);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 50);
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
<section
  id="home"
  className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#0a0f2c] to-[#020617]"
>
      {/* glow blobs */}
      <div className="absolute top-24 left-24 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-24 right-24 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full" />

      <div className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-[120px]`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">

          {/* LEFT CONTENT */}
          <div>
            {/* ONE-LINE TITLE */}
            <p className="text-[48px] sm:text-[60px] lg:text-[68px] font-extrabold leading-tight text-white">
  <span className="text-[#38bdf8] font-semibold">
    Hello, I’m
  </span>
</p>

<p className="text-[48px] sm:text-[60px] lg:text-[68px] font-extrabold leading-tight text-white">
  Nafis <span className="text-[#38bdf8]">Quaisar</span>
</p>


            {/* typing */}
            <p className="mt-4 text-[22px] sm:text-[26px] font-medium h-[36px]">
              <span className={`${roles[roleIndex].color}`}>
                {text}
              </span>
              <span className={`${roles[roleIndex].color} animate-pulse ml-1`}>
                |
              </span>
            </p>

            <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
              I build clean, scalable, and production-ready mobile applications
              using Kotlin, MVVM, Firebase, Flutter, and modern architecture.
            </p>

            {/* buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded-xl bg-[#38bdf8] text-[#020617] font-semibold hover:bg-[#0ea5e9] transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 transition"
              >
                Hire Me
              </a>
            </div>

            {/* socials */}
      {/* socials */}
<div className="mt-8 flex gap-5 text-slate-400">
  <a
    href="https://github.com/nafisquaisar"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/in/nafis-quaisar-b35a4725a"
    target="_blank"
    rel="noreferrer"
  >
    <FaLinkedinIn className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>

  <a
    href="https://www.instagram.com/nafisquaisar/"
    target="_blank"
    rel="noreferrer"
  >
    <FaInstagram className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>

  <a
    href="https://www.facebook.com/9801999829a"
    target="_blank"
    rel="noreferrer"
  >
    <FaFacebookF className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>

  <a
    href="https://x.com/NafisKamran"
    target="_blank"
    rel="noreferrer"
  >
    <FaXTwitter className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>

  <a
    href="https://wa.me/919801999829"
    target="_blank"
    rel="noreferrer"
  >
    <FaWhatsapp className="w-5 h-5 hover:text-white transition cursor-pointer" />
  </a>
</div>



          </div>

          {/* RIGHT IMAGE */}


<div className="flex justify-center md:justify-end">
  <div className="relative w-[300px] h-[380px]">

    {/* animated glow ring */}
    <motion.div
      className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-purple-500 blur-xl opacity-60"
      animate={{
        rotate: [0, 360],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* image container */}
    <motion.div
      className="relative w-full h-full rounded-[50%] overflow-hidden"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <img
        src="/profile1.png"
        alt="Nafis Quaisar"
        className="w-full h-full object-cover scale-110"
      />

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent" />
    </motion.div>

  </div>
</div>





        </div>
      </div>
    </section>
  );
};

export default Hero;
