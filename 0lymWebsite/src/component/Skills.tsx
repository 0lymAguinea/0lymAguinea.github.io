const frontendTechs = [
  {
    text: "JavaScript",
    classText: "text-[#F7DF1E] hover:border-[#F7DF1E]",
  },
  {
    text: "TypeScript",
    classText: "text-brand-sky hover:border-brand-sky",
  },
  {
    text: "Vue.js",
    classText: "text-emerald-400 hover:border-emerald-400",
  },
  {
    text: "Nuxt.js",
    classText: "text-emerald-400 hover:border-emerald-400",
  },
  {
    text: "React.js",
    classText: "text-sky-400 hover:border-sky-400",
  },
  {
    text: "Next.js",
    classText: "text-white hover:border-white",
  },
  {
    text: "React Native",
    classText: "text-brand-sky hover:border-brand-sky",
  },
  {
    text: "Alpine.js",
    classText: "text-slate-300 hover:border-brand-accent",
  },
  {
    text: "Tailwind CSS",
    classText: "text-cyan-400 hover:border-cyan-400",
  },
  {
    text: "Bootstrap",
    classText: "text-purple-400 hover:border-purple-400",
  },
  {
    text: "CSS",
    classText: "text-blue-400 hover:border-blue-400",
  },
  {
    text: "HTML5 ",
    classText: "text-orange-400 hover:border-orange-400",
  },
];

const toolings = [
  {
    text: "VS Code",
    classText: "text-blue-400 hover:border-blue-400",
  },
  {
    text: "Vite",
    classText: "text-purple-400 hover:border-purple-400",
  },
  {
    text: "Git",
    classText: "text-orange-400 hover:border-orange-400",
  },
  {
    text: "GitHub",
    classText: "text-slate-300 hover:border-slate-300",
  },
  {
    text: "Bitbucket",
    classText: "text-blue-400 hover:border-blue-400",
  },
  {
    text: "Figma",
    classText: "text-rose-400 hover:border-rose-400",
  },
  {
    text: "Vercel",
    classText: "text-white hover:border-white",
  },
  {
    text: "NPM",
    classText: "text-red-400 hover:border-red-400",
  },
  {
    text: "Webpack",
    classText: "text-sky-400 hover:border-sky-400",
  },
  {
    text: "Babel",
    classText: "text-amber-300 hover:border-amber-300",
  },
];

const backendTechs = [
  {
    text: "REST APIs",
    classText: "text-emerald-300 hover:border-emerald-300",
  },
  {
    text: "Google Tag Manager",
    classText: "text-blue-400 hover:border-blue-400",
  },
  {
    text: "GA4 (Google Analytics)",
    classText: "text-amber-400 hover:border-amber-400",
  },
  {
    text: "Laravel",
    classText: "text-pink-400 hover:border-pink-400",
  },
  {
    text: "Livewire",
    classText: "text-pink-400 hover:border-pink-400",
  },
  {
    text: "TALL Stack",
    classText: "text-brand-accent hover:border-brand-accent",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="border-brand-border/60 mx-auto max-w-7xl border-t px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12 max-w-3xl">
        <h2 className="text-brand-accent mb-2 font-mono text-xs tracking-widest uppercase">
          Technical Proficiency
        </h2>
        <p className="text-3xl font-extrabold text-white sm:text-4xl">
          Stack &amp; Tools
        </p>
        <p className="mt-3 text-base text-slate-400">
          A comprehensive suite of technologies, frameworks, and developer
          workflows I leverage to build production-grade web interfaces.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-brand-surface border-brand-border hover:border-brand-accent/50 rounded-xl border p-6 transition-all duration-300">
          <div className="mb-5 flex items-center gap-3">
            <div className="bg-brand-accent/10 border-brand-accent/30 text-brand-accent flex h-10 w-10 items-center justify-center rounded-lg border">
              <i className="fa-solid fa-code text-lg"></i>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Frontend Architecture
              </h3>
              <p className="text-xs text-slate-400">
                Core client-side technologies
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {frontendTechs.map((tech) => {
              return (
                <span
                  className={`bg-brand-card border-brand-border rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${tech.classText}`}
                >
                  {tech.text}
                </span>
              );
            })}
          </div>
        </div>
        <div className="bg-brand-surface border-brand-border hover:border-brand-sky/50 rounded-xl border p-6 transition-all duration-300">
          <div className="mb-5 flex items-center gap-3">
            <div className="bg-brand-sky/10 border-brand-sky/30 text-brand-sky flex h-10 w-10 items-center justify-center rounded-lg border">
              <i className="fa-solid fa-screwdriver-wrench text-lg"></i>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Tooling &amp; Workflow
              </h3>
              <p className="text-xs text-slate-400">
                Environment and build tooling
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {toolings.map((tool) => {
              return (
                <span
                  className={`bg-brand-card border-brand-border rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${tool.classText}`}
                >
                  {tool.text}
                </span>
              );
            })}
          </div>
        </div>

        <div className="bg-brand-surface border-brand-border rounded-xl border p-6 transition-all duration-300 hover:border-emerald-400/50">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <i className="fa-solid fa-network-wired text-lg"></i>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Backend &amp; Analytics
              </h3>
              <p className="text-xs text-slate-400">
                Fullstack synergy &amp; tracking
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {backendTechs.map((backend) => {
              return (
                <span
                  className={`bg-brand-card border-brand-border rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${backend.classText}`}
                >
                  {backend.text}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
