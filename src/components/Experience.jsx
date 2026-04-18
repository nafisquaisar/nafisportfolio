import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGooglePlay, FaDownload } from "react-icons/fa";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import analyzePng from "../assets/experience/analyze.png";
import dashboardPng from "../assets/experience/dashboard.png";

/* ── project data ─────────────────────────────────────────────────── */
const PROJECT = {
  title: "Popular Bread – Bread Management System",
  role: "Android Developer",
  duration: "Dec 2025 – Feb 2026",
  status: "Production Ready",
  statusNote: "Future enhancements in progress",
  points: [
    "Developed a complete Bread Management System for shop owners.",
    "Implemented stock management, purchase tracking, and sales tracking modules.",
    "Designed financial analysis module with profit/loss calculation.",
    "Integrated client pending payment tracking.",
    "Built clean and responsive UI using modern Android design principles.",
    "App currently running in production environment.",
    "Future enhancements and feature upgrades in progress.",
  ],
};

/* ── animation variants ───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

/* ── shared style objects ─────────────────────────────────────────── */
const glassCard = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  boxShadow:
    "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
  padding: "32px",
};

const productionBadge = {
  background: "rgba(16, 185, 129, 0.12)",
  border: "1px solid rgba(16, 185, 129, 0.35)",
  color: "#10b981",
  borderRadius: "999px",
  padding: "5px 16px",
  fontSize: "13px",
  fontWeight: "700",
  display: "inline-flex",
  alignItems: "center",
  gap: "7px",
  width: "fit-content",
  letterSpacing: "0.4px",
};

/* ── screen data with real images ────────────────────────────────── */
const SCREENS = [
  { label: "Dashboard", img: dashboardPng, accent: "#6c63ff" },
  { label: "Financial Analysis", img: analyzePng, accent: "#00d4ff" },
];

/* ── lightbox ────────────────────────────────────────────────────── */
const Lightbox = ({ screen, onClose }) => {
  /* hide all canvases + lock scroll while open so WebGL can't bleed through */
  useEffect(() => {
    if (!screen) return;
    const canvases = document.querySelectorAll("canvas");
    const prev = [];
    canvases.forEach((c, i) => {
      prev[i] = c.style.visibility;
      c.style.visibility = "hidden";
    });
    document.body.style.overflow = "hidden";
    return () => {
      canvases.forEach((c, i) => {
        c.style.visibility = prev[i];
      });
      document.body.style.overflow = "";
    };
  }, [screen]);

  /* Escape key */
  useEffect(() => {
    const h = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!screen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        key="lb-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.97)",
          zIndex: 2147483647,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ── close button ── */}
        <button
          onClick={onClose}
          style={{
            position: "fixed",
            top: "16px",
            right: "16px",
            zIndex: 2147483647,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "#ef4444",
            border: "none",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "900",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 24px rgba(239,68,68,0.7)",
            transition: "transform 0.15s",
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ✕
        </button>

        {/* ── image ── */}
        <motion.img
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          src={screen.img}
          alt={screen.label}
          draggable={false}
          style={{
            maxWidth: "96vw",
            maxHeight: "96vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: "14px",
            boxShadow: `0 0 60px ${screen.accent}40`,
            display: "block",
          }}
        />
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

/* ── thumbnail card ──────────────────────────────────────────────── */
const ScreenThumb = ({ screen, delay, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
    whileHover={{ y: -5, scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    style={{
      width: "min(148px, 42vw)",
      borderRadius: "16px",
      border: `2px solid ${screen.accent}50`,
      boxShadow: `0 8px 28px rgba(0,0,0,0.5), 0 0 0 1px ${screen.accent}20`,
      overflow: "hidden",
      flexShrink: 0,
      cursor: "pointer",
      background: "#0a0f2c",
      transition: "border-color 0.2s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = screen.accent)}
    onMouseLeave={(e) =>
      (e.currentTarget.style.borderColor = `${screen.accent}50`)
    }
  >
    {/* image */}
    <div
      style={{
        width: "100%",
        aspectRatio: "9/16",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={screen.img}
        alt={screen.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* zoom icon overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s",
        }}
        className="thumb-overlay"
      >
        <span
          style={{
            fontSize: "28px",
            opacity: 0,
            transition: "opacity 0.2s",
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.8))",
          }}
          className="thumb-icon"
        >
          🔍
        </span>
      </div>
    </div>
    {/* label */}
    <div
      style={{
        padding: "7px 10px",
        background: `${screen.accent}14`,
        borderTop: `1px solid ${screen.accent}25`,
        textAlign: "center",
      }}
    >
      <span
        style={{
          color: screen.accent,
          fontSize: "11px",
          fontWeight: "600",
          letterSpacing: "0.4px",
        }}
      >
        {screen.label}
      </span>
    </div>
  </motion.div>
);

/* ── component ────────────────────────────────────────────────────── */
const Experience = () => {
  const [active, setActive] = useState(null);
  const [showPlayPopup, setShowPlayPopup] = useState(false);

  return (
    <div className="relative">
      {/* ── section heading ───────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className={`${styles.sectionSubText}`}>What I have built</p>
        <h2 className={`${styles.sectionHeadText}`}>Project Experience.</h2>
      </motion.div>

      {/* ── timeline wrapper ──────────────────────────────── */}
      <div className="relative flex flex-col items-center">
        {/* vertical glow line — desktop only */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-0 h-full"
          style={{
            width: "2px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, transparent 0%, #6c63ff 30%, #00d4ff 70%, transparent 100%)",
          }}
        />

        {/* ── timeline row ────────────────────────────────── */}
        <div
          className="relative w-full flex flex-col md:grid md:gap-0 pb-10"
          style={{ gridTemplateColumns: "1fr 64px 1fr" }}
        >
          {/* LEFT — project card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:pr-10 mb-8 md:mb-0"
          >
            <div style={glassCard}>
              {/* title + play store row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                  marginBottom: "4px",
                }}
              >
                <h3
                  className="text-white font-bold leading-tight"
                  style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
                >
                  {PROJECT.title}
                </h3>

                {/* action buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexShrink: 0,
                    marginTop: "2px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Play Store button */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nf.popularbread&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on Play Store"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      background: "linear-gradient(135deg, #01875f, #00c853)",
                      border: "none",
                      borderRadius: "10px",
                      padding: "8px 13px",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(1,135,95,0.4)",
                      transition: "transform 0.15s, box-shadow 0.15s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.06)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 22px rgba(1,135,95,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(1,135,95,0.4)";
                    }}
                  >
                    <FaGooglePlay style={{ color: "#fff", fontSize: "15px" }} />
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Play Store
                    </span>
                  </a>

                  {/* Download APK button */}
                  <a
                    href="/app/popular-bread.apk"
                    download="PopularBread.apk"
                    title="Download APK"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                      border: "none",
                      borderRadius: "10px",
                      padding: "8px 13px",
                      cursor: "pointer",
                      boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
                      transition: "transform 0.15s, box-shadow 0.15s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.06)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 22px rgba(124,58,237,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(124,58,237,0.4)";
                    }}
                  >
                    <FaDownload style={{ color: "#fff", fontSize: "14px" }} />
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.3px",
                      }}
                    >
                      Download
                    </span>
                  </a>
                </div>
              </div>

              {/* role */}
              <p
                className="font-semibold mb-6"
                style={{ color: "#a78bfa", fontSize: "15px" }}
              >
                {PROJECT.role}
              </p>

              {/* bullet points */}
              <ul className="space-y-3">
                {PROJECT.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="flex items-start gap-3"
                    style={{
                      color: "#d1d5db",
                      fontSize: "14px",
                      lineHeight: "1.65",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "7px",
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                        flexShrink: 0,
                      }}
                    />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CENTER — circle milestone */}
          <div className="hidden md:flex items-start justify-center pt-2">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "3px solid #6c63ff",
                background: "#0a0f2c",
                boxShadow:
                  "0 0 0 6px rgba(108,99,255,0.15), 0 0 28px rgba(108,99,255,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                }}
              />
            </div>
          </div>

          {/* RIGHT — duration + badges + 2 phone screenshots */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:pl-10 flex flex-col gap-4 pt-1"
          >
            {/* duration */}
            <span
              className="font-semibold"
              style={{
                color: "#e2e8f0",
                fontSize: "19px",
                letterSpacing: "0.2px",
              }}
            >
              {PROJECT.duration}
            </span>

            {/* production badge */}
            <span style={productionBadge}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                  display: "inline-block",
                  animation: "pulse-green 2s infinite",
                }}
              />
              {PROJECT.status}
            </span>

            {/* status note */}
            <p
              style={{ color: "#6b7280", fontSize: "13px", lineHeight: "1.5" }}
            >
              {PROJECT.statusNote}
            </p>

            {/* 2 real screenshot thumbnails — click to open lightbox */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                marginTop: "8px",
                flexWrap: "wrap",
              }}
            >
              {SCREENS.map((screen, i) => (
                <ScreenThumb
                  key={i}
                  screen={screen}
                  delay={0.2 + i * 0.15}
                  onClick={() => setActive(screen)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* lightbox */}
      <Lightbox screen={active} onClose={() => setActive(null)} />

      {/* ── Play Store popup ── */}
      {showPlayPopup &&
        ReactDOM.createPortal(
          <AnimatePresence>
            <motion.div
              key="ps-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPlayPopup(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                backdropFilter: "blur(6px)",
                zIndex: 2147483647,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.82, opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "linear-gradient(145deg, #0d1117, #0f1e14)",
                  border: "1px solid rgba(1,200,83,0.25)",
                  borderRadius: "20px",
                  padding: "36px 32px",
                  maxWidth: "400px",
                  width: "100%",
                  boxShadow:
                    "0 0 60px rgba(1,135,95,0.25), 0 20px 40px rgba(0,0,0,0.6)",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* close */}
                <button
                  onClick={() => setShowPlayPopup(false)}
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    background: "rgba(255,255,255,0.07)",
                    border: "none",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    color: "#9ca3af",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✕
                </button>

                {/* play store icon big */}
                <div
                  style={{
                    width: "68px",
                    height: "68px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #01875f, #00c853)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: "0 8px 28px rgba(1,135,95,0.5)",
                  }}
                >
                  <FaGooglePlay style={{ color: "#fff", fontSize: "30px" }} />
                </div>

                {/* app name */}
                <p
                  style={{
                    color: "#e2e8f0",
                    fontWeight: "800",
                    fontSize: "18px",
                    marginBottom: "6px",
                  }}
                >
                  Popular Bread
                </p>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "13px",
                    marginBottom: "20px",
                  }}
                >
                  Bread Management System
                </p>

                {/* status badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(251,191,36,0.1)",
                    border: "1px solid rgba(251,191,36,0.35)",
                    borderRadius: "999px",
                    padding: "6px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#fbbf24",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      color: "#fbbf24",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    Closed Testing
                  </span>
                </div>

                {/* launch date */}
                <div
                  style={{
                    background: "rgba(1,200,83,0.07)",
                    border: "1px solid rgba(1,200,83,0.2)",
                    borderRadius: "14px",
                    padding: "18px",
                    marginBottom: "8px",
                  }}
                >
                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: "12px",
                      marginBottom: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    Coming to Play Store
                  </p>
                  <p
                    style={{
                      color: "#00c853",
                      fontWeight: "900",
                      fontSize: "26px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    20 March 2026
                  </p>
                </div>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "12px",
                    lineHeight: "1.6",
                    marginTop: "14px",
                  }}
                >
                  The app is currently in closed testing. It will be publicly
                  available on Google Play Store on 20 March 2026.
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}

      {/* keyframes + thumb hover */}
      <style>{`
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 6px #10b981; }
          50%       { box-shadow: 0 0 14px #10b981, 0 0 24px rgba(16,185,129,0.4); }
        }
        @media (min-width: 768px) {
          .md\\:grid { display: grid; }
        }
        div:hover > .thumb-overlay { background: rgba(0,0,0,0.35) !important; }
        div:hover > .thumb-overlay .thumb-icon { opacity: 1 !important; }
      `}</style>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
