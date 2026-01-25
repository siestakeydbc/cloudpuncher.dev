import React from "react";

const BRAND = {
  name: "David Brooks Cox",
  tagline: "Cloud Security • IAM • Detection Engineering",
  headline:
    "Cloud security practitioner focused on AWS security, identity and access management, and detection engineering — building hands-on projects and lab evidence to support interview-ready discussions.",
  location: "Sarasota, FL",
  email: "dc.pentester@protonmail.com",
  linkedin: "https://www.linkedin.com/in/davidbrookscox",
  github: "https://github.com/siestakeydbc",
};

const HIGHLIGHTS = [
  {
    title: "Cloud Security + IAM",
    body: "Identity-first security: least privilege, role design, access reviews, and misconfiguration discovery with practical remediation steps.",
  },
  {
    title: "Detection Engineering",
    body: "Signal-to-investigation workflows: detection logic, triage patterns, and incident-response context tied to business impact.",
  },
  {
    title: "Hands-on Labs (In Progress)",
    body: "Building repeatable labs and writeups with clear evidence, screenshots, and recruiter-readable summaries.",
  },
  {
    title: "Offensive + AI (Secondary Track)",
    body: "Developing offensive and AI testing skills as a long-term specialization, while prioritizing cloud/IAM readiness now.",
  },
];

const PROJECTS = [
  {
    name: "cloudpunchr-tools",
    desc: "A growing toolkit focused on practical recon, validation, and repeatable workflows for security testing and analysis.",
    tags: ["Tooling", "Automation"],
    href: "https://github.com/siestakeydbc",
  },
  {
    name: "S3-Exploiter",
    desc: "Validate common S3 misconfigurations and map security impact with report-ready output and remediation notes.",
    tags: ["AWS", "S3", "Misconfig"],
    href: "https://github.com/siestakeydbc",
  },
  {
    name: "Writeups (In Progress)",
    desc: "Hands-on practice notes and walkthroughs focused on clarity, reproducibility, and interview-ready explanation.",
    tags: ["Labs", "Documentation"],
    href: "https://github.com/siestakeydbc",
  },
];

function Pill({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(255,255,255,0.06)",
        padding: "6px 10px",
        fontSize: "12px",
        letterSpacing: "0.08em",
        color: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </span>
  );
}

function ButtonPrimary({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        background: "white",
        color: "black",
        padding: "10px 14px",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function ButtonGhost({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.22)",
        background: "transparent",
        color: "rgba(255,255,255,0.9)",
        padding: "10px 14px",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} style={{ scrollMarginTop: "110px" }}>
      <div style={{ marginBottom: "14px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "0.28em",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "8px",
          }}
        >
          {kicker}
        </div>
        <h2 style={{ fontSize: "22px", margin: 0, color: "white" }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070A12",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
      }}
    >
      {/* Sticky top nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(7,10,18,0.70)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ fontSize: "12px", letterSpacing: "0.22em", fontWeight: 800, color: "rgba(255,255,255,0.72)" }}>
            {BRAND.tagline.toUpperCase()}
          </div>

          <nav style={{ display: "flex", gap: "16px", fontSize: "14px", color: "rgba(255,255,255,0.82)" }}>
            <a href="#profile" style={{ color: "inherit", textDecoration: "none" }}>
              Profile
            </a>
            <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>
              Projects
            </a>
            <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </a>
          </nav>

          <div style={{ display: "flex", gap: "10px" }}>
            <ButtonGhost href={BRAND.github}>GitHub</ButtonGhost>
            <ButtonPrimary href={BRAND.linkedin}>LinkedIn</ButtonPrimary>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ position: "relative" }}>
        <div style={{ position: "relative", height: "420px", width: "100%", overflow: "hidden" }}>
          <img
            src="/images/hero_pics/glassbuilding_darkblue_nitesky.webp"
            alt="Modern glass building at night"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.25), #070A12)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(7,10,18,0.75), rgba(7,10,18,0.10), rgba(7,10,18,0))",
            }}
          />
        </div>

        <div style={{ maxWidth: "1050px", margin: "0 auto", padding: "0 18px 24px", marginTop: "-120px" }}>
          <div
            style={{
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(14px)",
              padding: "22px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px" }}>
              <div style={{ maxWidth: "760px" }}>
                <h1 style={{ margin: 0, fontSize: "40px", letterSpacing: "-0.02em" }}>{BRAND.name}</h1>
                <p style={{ marginTop: "12px", marginBottom: 0, fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
                  {BRAND.headline}
                </p>

                <div style={{ marginTop: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <Pill>{BRAND.location}</Pill>
                  <Pill>Cloud Security</Pill>
                  <Pill>IAM</Pill>
                  <Pill>Detection Engineering</Pill>
                  <Pill>Labs</Pill>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <ButtonPrimary href={BRAND.linkedin}>Connect</ButtonPrimary>
                <a
                  href={`mailto:${BRAND.email}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.22)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.9)",
                    padding: "10px 14px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <main style={{ maxWidth: "1050px", margin: "0 auto", padding: "22px 18px 64px" }}>
        <div style={{ display: "grid", gap: "34px" }}>
          <Section id="profile" kicker="PROFILE" title="Executive Summary">
            <div
              style={{
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                padding: "18px",
              }}
            >
              <p style={{ marginTop: 0, marginBottom: "16px", color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}>
                Cloud security practitioner with a healthcare IT and risk management background. Prioritizing AWS security, IAM, and
                detection engineering skills that translate directly to cloud security analyst and junior cloud security roles.
              </p>

              <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                {HIGHLIGHTS.map((h) => (
                  <div
                    key={h.title}
                    style={{
                      borderRadius: "18px",
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(255,255,255,0.03)",
                      padding: "14px",
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: "14px" }}>{h.title}</div>
                    <div style={{ marginTop: "8px", fontSize: "13px", lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>
                      {h.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="projects" kicker="WORK" title="Projects">
            <div style={{ display: "grid", gap: "12px" }}>
              {PROJECTS.map((p) => (
                <div
                  key={p.name}
                  style={{
                    borderRadius: "22px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "16px",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ maxWidth: "760px" }}>
                      <div style={{ fontSize: "16px", fontWeight: 900 }}>{p.name}</div>
                      <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>
                        {p.desc}
                      </div>
                      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {p.tags.map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    </div>

                    <ButtonGhost href={p.href}>View</ButtonGhost>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="contact" kicker="CONNECT" title="Contact">
            <div
              style={{
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
                padding: "16px",
              }}
            >
              <p style={{ marginTop: 0, marginBottom: "14px", fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                Fastest ways to reach me and review work.
              </p>

              <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.18em", color: "rgba(255,255,255,0.60)" }}>
                    LINKEDIN
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.90)" }}>
                    /in/davidbrookscox
                  </div>
                </a>

                <a
                  href={BRAND.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.18em", color: "rgba(255,255,255,0.60)" }}>
                    GITHUB
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.90)" }}>
                    /siestakeydbc
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND.email}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    padding: "14px",
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.18em", color: "rgba(255,255,255,0.60)" }}>
                    EMAIL
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.90)" }}>
                    {BRAND.email}
                  </div>
                </a>
              </div>
            </div>
          </Section>

          <footer style={{ paddingTop: "18px", borderTop: "1px solid rgba(255,255,255,0.10)", fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </footer>
        </div>
      </main>
    </div>
  );
}