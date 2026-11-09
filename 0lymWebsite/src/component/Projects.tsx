function Projects() {
  const projects = [
    {
      image: "/tmrx.png",
      name: "Total Male Rx",
      tag: "Production Live",
      stacks: [
        {
          name: "Nuxt.js",
          class: "text-brand-accent",
        },
        {
          name: "Vue 3",
          class: "text-brand-accent",
        },
        {
          name: "Tailwind CSS",
          class: "text-cyan-400",
        },
        {
          name: "Rest APIs",
          class: "text-slate-300",
        },
      ],
      url: "https://www.totalmalerx.com",
    },
    {
      image: "/lprx.png",
      name: "Lionspride Rx",
      tag: "Production Live",
      stacks: [
        {
          name: "Nuxt.js",
          class: "text-brand-accent",
        },
        {
          name: "Vue 3",
          class: "text-brand-accent",
        },
        {
          name: "Tailwind CSS",
          class: "text-cyan-400",
        },
        {
          name: "Rest APIs",
          class: "text-slate-300",
        },
      ],
      url: "https://www.lionspriderx.com",
    },
    {
      image: "/pbrx.png",
      name: "Pureblue Rx",
      tag: "Production Live",
      stacks: [
        {
          name: "Nuxt.js",
          class: "text-brand-accent",
        },
        {
          name: "Vue 3",
          class: "text-brand-accent",
        },
        {
          name: "Tailwind CSS",
          class: "text-cyan-400",
        },
        {
          name: "Rest APIs",
          class: "text-slate-300",
        },
      ],
      url: "https://www.trypureblue.com",
    },
  ];

  const projectLength = projects.length;

  return (
    <section
      className="border-brand-border/60 mx-auto max-w-7xl border-t px-4 py-20 sm:px-6 lg:px-8"
      id="projects"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="text-brand-accent mb-2 font-mono text-xs tracking-widest uppercase">
            Showcase
          </h2>

          <p className="text-3xl font-extrabold text-white sm:text-4xl">
            Featured Projects
          </p>

          <p className="mt-2 text-base text-slate-400">
            Production implementations engineered for performance, compliance,
            and user conversion.
          </p>
        </div>

        <div className="font-mono text-xs text-slate-400">
          <span>Displaying {projectLength} Flagship Builds</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((project) => {
          return (
            <article className="group bg-brand-surface border-brand-border hover:border-brand-accent/60 flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300">
              <div>
                <div className="bg-brand-card border-brand-border relative aspect-video overflow-hidden border-b">
                  <img
                    alt={`${project.name} website screenshot`}
                    className="h-full w-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={project.image}
                  />
                  <div className="from-brand-dark/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60"></div>
                  <span className="bg-brand-dark/90 border-brand-border text-brand-accent absolute top-3 right-3 rounded-full border px-2.5 py-1 font-mono text-[11px]">
                    {project.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="group-hover:text-brand-accent text-xl font-bold text-white transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stacks.map((stack) => {
                      return (
                        <span
                          key={stack.name}
                          className={`bg-brand-card border-brand-border rounded border px-2 py-0.5 font-mono text-[11px] ${stack.class}`}
                        >
                          {stack.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  className="bg-brand-card hover:bg-brand-accent hover:text-brand-dark border-brand-border inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs font-semibold text-slate-200 transition-all duration-200"
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Visit {project.name}</span>

                  <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
