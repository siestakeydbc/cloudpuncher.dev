export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">About</h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
          I’m David Brooks Cox, a cloud security practitioner with a background in healthcare IT and
          risk management. I focus on AWS security, IAM, vulnerability validation, and offensive-style
          testing to ensure findings reflect real-world risk.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-sm font-medium text-white">Focus</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Cloud Security, IAM, and practical validation of misconfigurations.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-sm font-medium text-white">Approach</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Offensive-minded testing paired with clear, actionable reporting.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-sm font-medium text-white">Tooling</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Kali Linux, Burp Suite, Nmap, Terraform, and AI-assisted workflows.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-6">
            <h3 className="text-sm font-medium text-white">Outcome</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Findings that engineering teams can act on immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
