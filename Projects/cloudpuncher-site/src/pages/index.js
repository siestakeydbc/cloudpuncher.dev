import React from "react";

const BRAND = {
  name: "David Brooks Cox",
  tagline: "Cloud Security · IAM · Detection Engineering",
  headline:
    "Cloud security practitioner focused on AWS security, identity and access management, and detection engineering.",
  location: "Sarasota, FL",
  email: "dc.pentester@protonmail.com",
  github: "https://github.com/siestakeydbc",
  linkedin: "https://www.linkedin.com/in/davidbrookscocx",
  resume: "/David_Cox_Cloud_Security_Analyst_IAM.pdf",
};

export default function Home() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <h1 style={styles.name}>{BRAND.name}</h1>
        <p style={styles.tagline}>{BRAND.tagline}</p>
        <p style={styles.headline}>{BRAND.headline}</p>
        <p style={styles.location}>{BRAND.location}</p>

        <div style={styles.buttonRow}>
          <a
            href={BRAND.resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.button, ...styles.primary }}
          >
            Download CV
          </a>

          <a
            href={BRAND.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            GitHub
          </a>

          <a
            href={BRAND.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.button}
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b0f14",
    color: "#e5e7eb",
    padding: "2rem",
  },
  card: {
    maxWidth: "760px",
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "16px",
    padding: "2.5rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  name: {
    fontSize: "2.4rem",
    marginBottom: "0.5rem",
  },
  tagline: {
    fontSize: "1.1rem",
    color: "#9ca3af",
    marginBottom: "1.25rem",
  },
  headline: {
    fontSize: "1.05rem",
    lineHeight: 1.6,
    marginBottom: "1.25rem",
  },
  location: {
    fontSize: "0.95rem",
    color: "#9ca3af",
    marginBottom: "2rem",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
  button: {
    padding: "0.75rem 1.25rem",
    borderRadius: "10px",
    border: "1px solid #374151",
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  },
  primary: {
    background: "#2563eb",
    border: "1px solid #2563eb",
  },
};