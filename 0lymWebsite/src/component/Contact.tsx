import { personalInfos } from "../constants/personalInfos";

function Contact() {
  return (
    <section
      className="border-brand-border/60 mx-auto max-w-7xl border-t px-4 py-20 sm:px-6 lg:px-8"
      id="contact"
    >
      <div className="from-brand-surface to-brand-card border-brand-border relative mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-gradient-to-b p-8 text-center shadow-2xl sm:p-12">
        <div className="bg-brand-accent/10 pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[100px]"></div>
        <div className="relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-medium text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            <span>Available for Full-time Roles &amp; Contracts</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ready to Build Something Exceptional?
          </h2>
          <p className="mx-auto max-w-2xl text-base font-normal text-slate-300 sm:text-lg">
            Whether you need a high-converting pharmaceutical web app, a
            e-commerce, or a modern Vue/Nuxt/React/Next application, let&apos;s
            connect.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 font-mono text-sm">
            <a
              className="bg-brand-accent text-brand-dark inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 font-bold transition-all hover:shadow-[0_0_25px_rgba(0,245,212,0.4)]"
              href={`mailto:${personalInfos.EMAIL}`}
            >
              <i className="fa-regular fa-envelope text-base"></i>
              <span>{personalInfos.EMAIL}</span>
            </a>
            <a
              className="bg-brand-card border-brand-border inline-flex items-center gap-2.5 rounded-xl border px-6 py-3.5 text-slate-200 transition-all hover:border-slate-400 hover:text-white"
              href={`tel:${personalInfos.PHONE}`}
            >
              <i className="fa-solid fa-phone text-brand-accent text-base"></i>
              <span>Call Me Directly</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6 pt-6 text-lg text-slate-400">
            <a
              aria-label="GitHub Profile"
              className="hover:text-brand-accent transition-colors"
              href={personalInfos.GITHUB}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              aria-label="LinkedIn Profile"
              className="hover:text-brand-accent transition-colors"
              href={personalInfos.LINKEDIN}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="Email Olym"
              className="hover:text-brand-accent transition-colors"
              href={`mailto:${personalInfos.EMAIL}`}
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
