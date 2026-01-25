const projects = [
  {
    title: "cloudpunchr-tools",
    description:
      "A growing toolkit focused on practical recon, validation, and repeatable engagement workflows.",
    tags: ["Tooling", "Automation", "OffSec"],
    repo: "https://github.com/siestakeydbc",
  },
  {
    title: "S3-Exploiter",
    description:
      "Validate common S3 misconfigurations and map security impact with report-ready output.",
    tags: ["AWS", "S3", "Misconfig"],
    repo: "https://github.com/siestakeydbc",
  },
  {
    title: "Writeups",
    description:
      "Hands-on practice notes and walkthroughs built for clarity and reproducibility.",
    tags: ["HTB", "THM", "Methodology"],
    repo: "https://github.com/siestakeydbc",
  },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950/40 px-3 py-1 text-xs text-neutral-300">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Projects</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
          Recruiter-friendly artifacts: tools, writeups, and structured deliverables that demonstrate
          hands-on capability and clear communication.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-400">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>

              <div className="mt-6">
                <a
                  className="inline-flex items-center rounded-lg border border-neutral-800 bg-neutral-950/40 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900/50"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
