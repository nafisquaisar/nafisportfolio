import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-[#020617]/90 backdrop-blur border-b border-slate-800"
            : "bg-transparent"
        }`}
      >
        <div
          className={`${styles.paddingX} max-w-7xl mx-auto flex items-center justify-between h-[64px]`}
        >
          {/* LOGO */}
          <a
            href="#home"
            className="text-white text-lg font-bold"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            Nafis<span className="text-[#38bdf8]">.</span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`text-sm cursor-pointer transition ${
                  active === nav.title
                    ? "text-[#38bdf8]"
                    : "text-slate-300"
                } hover:text-[#38bdf8]`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              download
              className="ml-4 px-4 py-2 rounded-lg bg-[#38bdf8] text-[#020617] font-semibold hover:bg-[#0ea5e9] transition"
            >
              Download CV
            </a>
          </ul>

          {/* MOBILE MENU ICON (ONLY MOBILE) */}
          <div className="md:hidden">
            <img
              src={menu}
              alt="menu"
              className="w-7 h-7 cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      </nav>

      {/* ================= OVERLAY (ONLY WHEN MENU OPEN) ================= */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden"
          onClick={() => setToggle(false)}
        />
      )}

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 h-screen w-[260px] bg-[#020617]
        border-l border-slate-800 z-50 transform transition-transform duration-300
        md:hidden
        ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="h-[64px] flex items-center justify-between px-6 border-b border-slate-800">
          <p className="text-[#38bdf8] font-semibold text-lg">Menu</p>
          <img
            src={close}
            alt="close"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setToggle(false)}
          />
        </div>

        {/* LINKS */}
        <div className="p-6 flex flex-col gap-6 h-[calc(100%-64px)]">
          {navLinks.map((nav) => (
            <a
              key={nav.id}
              href={`#${nav.id}`}
              className="text-slate-300 hover:text-[#38bdf8] transition"
              onClick={() => {
                setActive(nav.title);
                setToggle(false);
              }}
            >
              {nav.title}
            </a>
          ))}

          {/* MOBILE RESUME */}
          <a
            href="/resume.pdf"
            download
            className="mt-auto px-4 py-3 rounded-xl bg-[#38bdf8] text-[#020617] font-semibold text-center"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
