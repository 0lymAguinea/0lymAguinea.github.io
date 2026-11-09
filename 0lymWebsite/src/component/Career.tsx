const careerHistories = [
  {
    position: "Frontend Web Developer",
    companyName:
      "Stealth Solutions and Digital Marketing Inc. <span class='text-brand-accent'>/</span> Live Life Stronger Inc.",
    year: "March 2024 - Nov 2026",
    contributions: [
      "Developed and deployed three pharmaceutical e-commerce websites utilizing Vue.js, Nuxt.js,TypeScript, and Tailwind CSS, seamlessly integrating secure REST APIs to communicate with backend services.",
      "Implemented mission-critical e-commerce features including interactive multi-step checkout orders, dynamic clinical health questionnaire forms, ID verification flows, order confirmation portals, and member dashboard pages.",
      "Architected modular component-driven design systems, providing reusable UI component kits with strict form validation schemas and resilient error handling patterns.",
      "Optimized web vitals for performance, accessibility (a11y), cross-device responsiveness, and organic SEO ranking using SSR/SSG rendering mechanisms and semantic markup.",
      "Translated complex Figma design systems into pixel-accurate, smooth, production-ready frontend interfaces with zero visual regressions.",
      "Developed and maintained additional e-commerce web applications powered by the TALL stack (Tailwind CSS, Alpine.js, Laravel, Livewire), driving end-to-end user experience and UI implementations.",
    ],
    coreTechs: [
      {
        text: "Vue.js",
        class: "text-brand-accent",
      },
      {
        text: "Nuxt.js",
        class: "text-brand-accent",
      },
      {
        text: "TypeScript",
        class: "text-brand-sky",
      },
      {
        text: "Tailwind CSS",
        class: "text-cyan-400 ",
      },
      {
        text: "REST APIs",
        class: "text-emerald-400",
      },
      {
        text: "Laravel / Livewire",
        class: " text-rose-400",
      },
    ],
  },
];

function Career() {
  return (
    <section
      id="career"
      className="border-brand-border/60 mx-auto max-w-7xl border-t px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mb-12 max-w-3xl">
        <h2 className="text-brand-accent mb-2 font-mono text-xs tracking-widest uppercase">
          Track Record
        </h2>
        <p className="text-3xl font-extrabold text-white sm:text-4xl">
          Career History
        </p>
        <p className="mt-3 text-base text-slate-400">
          Proven frontend engineering impact across enterprise healthcare
          e-commerce and fast-moving digital marketing environments.
        </p>
      </div>

      <div className="border-brand-border hover:border-brand-accent/70 relative space-y-5 border-l-2 pl-6 transition-colors duration-300 sm:pl-8">
        {careerHistories.map((career) => {
          return (
            <div>
              <div className="bg-brand-accent border-brand-dark absolute top-1.5 -left-[9px] h-4 w-4 rounded-full border-4 shadow-[0_0_12px_rgba(0,245,212,0.8)]"></div>

              <div className="bg-brand-surface/90 border-brand-border neon-border-glow rounded-2xl border p-6 transition-all duration-300 sm:p-8">
                <div className="border-brand-border/70 flex flex-col justify-between gap-3 border-b pb-6 md:flex-row md:items-center">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold tracking-tight text-white">
                        {career.position}
                      </h3>
                    </div>

                    <p
                      className="mt-1 text-base font-medium text-slate-300"
                      dangerouslySetInnerHTML={{ __html: career.companyName }}
                    ></p>
                  </div>

                  <div className="bg-brand-card border-brand-border inline-flex items-center gap-2 self-start rounded-lg border px-3.5 py-1.5 font-mono text-xs text-slate-300 md:self-auto">
                    <i className="fa-regular fa-calendar text-brand-accent"></i>
                    <span>{career.year}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-sm leading-relaxed font-normal text-slate-300 sm:text-base">
                  {career.contributions.map((contribution) => {
                    return (
                      <div
                        key={contribution}
                        className="flex items-start gap-3"
                      >
                        <i className="fa-solid fa-check text-brand-accent mt-1 shrink-0 text-sm"></i>
                        <p>{contribution}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="border-brand-border/60 mt-8 flex flex-wrap items-center gap-2 border-t pt-6">
                  <span className="mr-2 font-mono text-xs text-slate-400">
                    Core Tech:
                  </span>

                  {career.coreTechs.map((tech) => {
                    return (
                      <span
                        key={tech.text}
                        className={`bg-brand-card border-brand-border rounded border px-2.5 py-1 font-mono text-xs ${tech.class}`}
                      >
                        {tech.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Career;
