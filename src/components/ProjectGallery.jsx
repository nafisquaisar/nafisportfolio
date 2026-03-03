import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

/* ── placeholder screen data ──────────────────────────────────────── */
const SCREENS = [
  { id: 1, label: "Dashboard",          color: "#1e1b4b", accent: "#6c63ff" },
  { id: 2, label: "Stock Management",   color: "#0f2027", accent: "#00d4ff" },
  { id: 3, label: "Sales Tracking",     color: "#0d1f12", accent: "#10b981" },
  { id: 4, label: "Purchase Tracker",   color: "#1a0a2e", accent: "#a78bfa" },
  { id: 5, label: "Financial Analysis", color: "#1c1007", accent: "#f59e0b" },
  { id: 6, label: "Client Payments",    color: "#0c1a2e", accent: "#38bdf8" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.08 * i },
  }),
};

/* ── light-box modal ─────────────────────────────────────────────── */
const Modal = ({ screen, onClose }) => (
  <AnimatePresence>
    {screen && (
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(6px)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: screen.color,
            border: `1px solid ${screen.accent}40`,
            borderRadius: "20px",
            width: "min(380px, 90vw)",
            aspectRatio: "9/19",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            boxShadow: `0 0 60px ${screen.accent}40`,
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: `${screen.accent}25`,
              border: `2px solid ${screen.accent}60`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "24px" }}>📱</span>
          </div>
          <p style={{ color: "#e2e8f0", fontWeight: "700", fontSize: "17px" }}>
            {screen.label}
          </p>
          <p style={{ color: "#6b7280", fontSize: "13px", textAlign: "center", padding: "0 24px" }}>
            UI screen coming soon – screenshots will be shown here once published.
          </p>
          <button
            onClick={onClose}
            style={{
              marginTop: "8px",
              background: screen.accent,
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              padding: "10px 28px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* ── main component ──────────────────────────────────────────────── */
const ProjectGallery = () => {
  const [active, setActive] = useState(null);

  return (
    <div id="gallery" className="relative">
      {/* heading */}
      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className={`${styles.sectionSubText}`}>Popular Bread App</p>
        <h2 className={`${styles.sectionHeadText}`}>UI Screens.</h2>
        <p
          className="mt-4 mx-auto"
          style={{
            color: "#9ca3af",
            fontSize: "15px",
            maxWidth: "480px",
            lineHeight: "1.7",
          }}
        >
          A visual tour of the Bread Management System's interface — click any
          card to preview that screen.
        </p>
      </motion.div>

      {/* grid */}
      <div
        className="grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(min(180px, 100%), 1fr))",
        }}
      >
        {SCREENS.map((screen, i) => (
          <motion.button
            key={screen.id}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActive(screen)}
            style={{
              background: screen.color,
              border: `1px solid ${screen.accent}30`,
              borderRadius: "16px",
              cursor: "pointer",
              padding: "0",
              overflow: "hidden",
              boxShadow: `0 4px 24px rgba(0,0,0,0.35)`,
              transition: "border-color 0.2s",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.borderColor = `${screen.accent}70`)
            }
            onMouseLeave={e =>
              (e.currentTarget.style.borderColor = `${screen.accent}30`)
            }
          >
            {/* phone mockup area */}
            <div
              style={{
                width: "100%",
                aspectRatio: "9/16",
                background: `linear-gradient(160deg, ${screen.accent}12 0%, ${screen.color} 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                position: "relative",
              }}
            >
              {/* status bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "28px",
                  background: "rgba(0,0,0,0.3)",
                  borderBottom: `1px solid ${screen.accent}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "0 12px",
                  gap: "5px",
                }}
              >
                {[1, 2, 3].map(d => (
                  <div
                    key={d}
                    style={{
                      width: d * 4 + "px",
                      height: "8px",
                      borderRadius: "2px",
                      background: screen.accent,
                      opacity: 0.5 + d * 0.15,
                    }}
                  />
                ))}
              </div>

              {/* content placeholder */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: `${screen.accent}25`,
                  border: `1.5px solid ${screen.accent}50`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                }}
              >
                📱
              </div>

              {/* mock UI bars */}
              <div style={{ width: "60%", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[100, 80, 65].map((w, j) => (
                  <div
                    key={j}
                    style={{
                      height: "6px",
                      width: w + "%",
                      borderRadius: "4px",
                      background: `${screen.accent}35`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* label */}
            <div
              style={{
                padding: "12px 14px",
                textAlign: "center",
                borderTop: `1px solid ${screen.accent}20`,
              }}
            >
              <p
                style={{
                  color: "#e2e8f0",
                  fontWeight: "600",
                  fontSize: "13px",
                  letterSpacing: "0.2px",
                }}
              >
                {screen.label}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* coming-soon note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-10"
        style={{ color: "#6b7280", fontSize: "13px" }}
      >
        Screenshots will be added once the app is publicly published.
      </motion.p>

      {/* lightbox */}
      <Modal screen={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default SectionWrapper(ProjectGallery, "gallery");
