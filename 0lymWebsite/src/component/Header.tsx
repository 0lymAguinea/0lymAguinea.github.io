const items = [
  {
    name: "About",
    value: "#about",
  },
  {
    name: "Stack & Tools",
    value: "#skills",
  },
  {
    name: "Career",
    value: "#career",
  },
  {
    name: "Projects",
    value: "#projects",
  },
  {
    name: "Contact",
    value: "#contact",
  },
];

interface NavItemsProps {
  className?: string;
}

function Header() {
  return (
    <header className="glass-nav bg-brand-dark/80 border-brand-border/70 sticky top-0 z-50 w-full border-b transition-all duration-300">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          aria-label="Olym Aguinea Home"
          className="group flex items-center gap-3 focus:outline-none"
          href="#about"
        >
          <div className="from-brand-accent/20 to-brand-sky/30 border-brand-accent/40 text-brand-accent flex h-10 w-10 items-center justify-center rounded-xl border bg-gradient-to-tr shadow-[0_0_15px_rgba(0,245,212,0.2)] transition-transform duration-300 group-hover:scale-105">
            <span className="font-mono text-xl font-extrabold tracking-tighter text-white">
              Ø
            </span>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-1 font-mono text-xl font-extrabold tracking-wider text-white">
              OLYM<span className="text-brand-accent">.</span>
            </span>

            <span className="text-brand-muted -mt-1 font-mono text-[10px] tracking-widest uppercase">
              Engineer
            </span>
          </div>
        </a>

        <nav
          aria-label="Main Navigation"
          className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex"
        >
          {items.map((item) => {
            return (
              <a
                className="hover:text-brand-accent transition-colors duration-200"
                href={item.value}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-400 lg:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>

            <span>Status: Available for Work</span>
          </div>

          <a
            className="from-brand-accent to-brand-sky text-brand-dark inline-flex items-center gap-2 rounded-lg bg-gradient-to-r px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_20px_rgba(0,245,212,0.4)]"
            href="#contact"
          >
            <span>Let's Talk</span>

            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
