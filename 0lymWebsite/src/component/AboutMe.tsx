import { personalInfos } from "../constants/personalInfos";

function AboutMe() {
  const profileLinks = [
    {
      icon: "fa-github fa-brands",
      text: "GitHub",
      link: personalInfos.GITHUB,
    },
    {
      icon: "fa-linkedin fa-brands",
      text: "LinkedIn",
      link: personalInfos.LINKEDIN,
    },
    {
      icon: "fa-envelope fa-regular",
      text: "Email me",
      link: `mailto:${personalInfos.EMAIL}`,
    },
    {
      icon: "fa-phone fa-solid",
      text: "Call me",
      link: `tel:${personalInfos.PHONE}`,
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 sm:pt-20 md:pb-28 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-6 lg:col-span-7">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-400 lg:hidden">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>

            <span>Status: Available for Hire</span>
          </div>

          <div className="space-y-2">
            <p className="text-brand-accent flex items-center gap-2 font-mono text-sm tracking-wide md:text-base">
              <span className="bg-brand-accent inline-block h-[1px] w-8"></span>
              Hello there! I'm
            </p>

            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Olym Aguinea
            </h1>

            <h2 className="from-brand-accent via-brand-sky bg-gradient-to-r to-slate-200 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
              Frontend Web Developer &amp; UI Engineer
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed font-normal text-slate-300 sm:text-lg">
            Specializing in architecting high-performance, accessible, and
            scalable web applications. Proven expertise in crafting
            pixel-perfect, conversion-driven e-commerce experiences with {""}
            <span className="font-semibold text-white">Vue.js</span>, {""}
            <span className="font-semibold text-white">Nuxt</span>, {""}
            <span className="font-semibold text-white">React</span>, {""}
            <span className="font-semibold text-white">TypeScript</span>, and{" "}
            {""}
            <span className="font-semibold text-white">Tailwind CSS</span>.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {profileLinks.map((profile) => {
              return (
                <a
                  className="bg-brand-card/90 border-brand-border hover:border-brand-accent hover:text-brand-accent inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 font-mono text-xs text-slate-300 transition-all duration-200"
                  href={profile.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className={`text-sm ${profile.icon}`}></i>

                  <span>{profile.text}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              className="bg-brand-accent text-brand-dark rounded-lg px-6 py-3.5 text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]"
              href="#projects"
            >
              Explore Featured Work
            </a>

            <a
              className="bg-brand-card border-brand-border rounded-lg border px-6 py-3.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white"
              href="#experience"
            >
              Career Trajectory
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-brand-card/95 border-brand-border relative rounded-2xl border p-6 shadow-2xl backdrop-blur-xl">
            <div className="border-brand-border/80 flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-rose-500/80"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-amber-500/80"></span>
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-brand-muted font-mono text-xs">
                olym-aguinea.config.ts
              </span>
            </div>

            <div className="space-y-2 pt-4 font-mono text-xs leading-relaxed text-slate-300 sm:text-sm">
              <p>
                <span className="text-purple-400">const</span> {""}
                <span className="text-sky-400">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name:</span>
                <span className="text-emerald-400">'Olym Aguinea'</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">role:</span>
                <span className="text-emerald-400">
                  'Frontend Web Developer'
                </span>
                ,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">location:</span>
                <span className="text-emerald-400">
                  'PH, Remote / Worldwide'
                </span>
                ,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">expertise:</span> [
              </p>
              <p className="text-brand-accent pl-8">
                'Vue.js', 'Nuxt.js', 'TypeScript',
              </p>
              <p className="text-brand-accent pl-8">
                'Tailwind CSS', 'React.js', 'Next.js', 'REST APIs'
              </p>
              <p className="pl-4">],</p>
              <p>{"}"};</p>
            </div>

            <div className="border-brand-border/80 mt-6 grid grid-cols-2 gap-2 border-t pt-5 text-center font-mono">
              <div className="bg-brand-surface/70 border-brand-border/40 rounded border p-2">
                <span className="text-brand-accent block text-lg font-bold">
                  2.7+
                </span>
                <span className="text-[11px] text-slate-400">Years Exp</span>
              </div>
              <div className="bg-brand-surface/70 border-brand-border/40 rounded border p-2">
                <span className="text-brand-sky block text-lg font-bold">
                  100%
                </span>
                <span className="text-[11px] text-slate-400">Figma Match</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
