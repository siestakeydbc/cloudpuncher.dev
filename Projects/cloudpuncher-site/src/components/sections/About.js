// src/components/sections/About.js
export default function About() {
  return (
    <section className="mx-auto mt-8 w-full max-w-3xl px-4">
      <div className="rounded-2xl border border-neutral-800/70 bg-neutral-900/35 p-6">
        <h1 className="text-2xl font-semibold text-white">David Brooks Cox</h1>

        <p className="mt-1 text-sm text-neutral-300">
          SOC Analyst · Detection Engineering · Cloud Security
        </p>

        <p className="mt-4 text-sm leading-relaxed text-neutral-200">
          Cybersecurity professional with an MS in Cybersecurity Strategy &amp; Information
          Assurance from George Washington University (3.9 GPA) and 20+ years of experience
          in high-acuity, zero-downtime clinical environments where precision and accountability
          are non-negotiable.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-200">
          Focused on SOC operations, threat hunting, and detection engineering — with a growing
          specialization in cloud-native security, identity-based attack paths, and structured
          vulnerability management.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-neutral-200">
          ISC2 CC certified · INE ICCA · CompTIA Security+ in progress · St. Petersburg, FL
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/45 p-4">
            <h3 className="text-sm font-semibold text-white">SOC Analysis &amp; Triage</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-300">
              Alert triage, incident response workflows, log analysis, and security
              monitoring using SIEM platforms and endpoint telemetry. Built for
              high-signal, low-noise environments.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/45 p-4">
            <h3 className="text-sm font-semibold text-white">Threat Hunting &amp; Detection</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-300">
              Hypothesis-driven hunting using KQL and Microsoft Defender for Endpoint.
              MITRE ATT&amp;CK mapping, behavioral analysis, and insider threat detection
              across endpoint and network telemetry.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800/60 bg-neutral-900/45 p-4">
            <h3 className="text-sm font-semibold text-white">Vulnerability Management</h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-300">
              End-to-end vulnerability lifecycle using Tenable Nessus and Azure.
              Risk prioritization, remediation planning, validation scanning, and
              structured reporting for measurable risk reduction.
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          
            <a href="/David_Cox_SOC_Analyst_CV.pdf"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-500"
          >
            Download CV
          </a>
          
           <a href="https://github.com/siestakeydbc"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-700/70 bg-neutral-900/30 px-4 py-2 text-xs text-neutral-100 hover:border-neutral-600/60 hover:bg-neutral-900/45"
          >
            GitHub
          </a>
          
            <a href="https://linkedin.com/in/davidbrookscox"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-700/70 bg-neutral-900/30 px-4 py-2 text-xs text-neutral-100 hover:border-neutral-600/60 hover:bg-neutral-900/45"
          >
            LinkedIn
          </a>
          
           <a href="mailto:dc.pentester@protonmail.com"
            className="rounded-lg border border-neutral-700/70 bg-neutral-900/30 px-4 py-2 text-xs text-neutral-100 hover:border-neutral-600/60 hover:bg-neutral-900/45"
          >
          dc.pentester@protonmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
