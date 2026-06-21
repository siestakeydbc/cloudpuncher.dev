const projects = [
  {
    title: "Threat Hunt: Unauthorized Tor Browser Usage",
    description:
      "Hypothesis-driven hunt using Microsoft Defender for Endpoint (MDE) telemetry + KQL to detect TOR installation/execution, correlate process/network/file artifacts, and produce SOC-ready findings with recommendations.",
    tags: ["SOC", "Threat Hunting", "MDE", "KQL", "Detection Engineering"],
    repo: "https://github.com/siestakeydbc/threat-hunt-tor-unauthorized-usage",
    cta: "View",
  },
  {
    title: "Vulnerability Management Program",
    description:
      "End-to-end vulnerability lifecycle using Tenable Nessus and Azure. Covers asset discovery, risk prioritization, remediation planning, validation scanning, and structured reporting for measurable risk reduction.",
    tags: ["Nessus", "Azure", "Vulnerability Management", "Risk Reduction"],
    repo: "https://github.com/siestakeydbc/vulnerability-management-program",
    cta: "View",
  },
  {
    title: "SOC Analyst Portfolio",
    description:
      "Structured SOC analyst portfolio developed through the LOG(N) Pacific internship program. Includes incident response playbooks, detection workflows, and documentation built for real-world SOC readiness.",
    tags: ["SOC", "Incident Response", "Playbooks", "LOG(N) Pacific"],
    repo: "https://github.com/siestakeydbc/SOC-Analyst-Portfolio",
    cta: "View",
  },
];










function Tag({ label }) {
  return (
    <span className="rounded-full border border-neutral-800/60 bg-neutral-950/25 px-2 py-1 text-[10px] text-neutral-200/90">
      {label}
    </span>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className={[
        // B: card/background rebalance (slightly lighter than before, more “smoke”)
        "rounded-xl border border-neutral-800/60 bg-neutral-900/30 p-5",
        // A: ensure readable body text contrast inside cards
        "shadow-sm transition-all duration-200",
        // Hover polish (lift + shadow) — already working for you now
        "transform-gpu hover:-translate-y-1 hover:border-neutral-700/70 hover:bg-neutral-900/40 hover:shadow-lg hover:shadow-black/30",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-200/90">
            {project.description}
          </p>
        </div>

        {/* C: “View” button micro-contrast */}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "shrink-0 rounded-lg border px-3 py-2 text-xs font-medium",
              "border-neutral-700/70 bg-neutral-950/35 text-neutral-100",
              "transition hover:border-neutral-600/80 hover:bg-neutral-900/45 hover:text-white",
              "focus:outline-none focus:ring-2 focus:ring-indigo-500/40",
            ].join(" ")}
          >
            {project.cta || "View"}
          </a>
        ) : null}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags?.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="mx-auto mt-10 w-full max-w-3xl px-4 pb-10">
      {/* A: hierarchy (Projects heading) + B: spacing */}
      <h2 className="text-lg font-semibold text-white">Projects</h2>
      <p className="mt-1 text-sm text-neutral-300">
        Practical investigations and tooling focused on detection quality, evidence validation, and structured remediation.
      </p>

      <div className="mt-4 grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
