const careerHistories = [
  {
    position: "Frontend Web Developer",
    companyName:
      "Stealth Solutions and Digital Marketing Inc. / Live Life Stronger Inc.",
    year: "March 2024 - Nov 2026",
    contributions: [
      "Developed and deployed three pharmaceutical e-commerce websites using <strong>Vue.js, Nuxt.js, TypeScript, and Tailwind CSS,</strong> integrating REST APIs to communicate with backend services.",
      "Implemented core e-commerce functionalities, including order pages, health questionnaire forms, ID verification pages, order confirmation pages, and dashboard pages.",
      "Designed component-driven architectures and developed reusable UI components for forms, validation, and common interface patterns.",
      "Optimized applications for performance, accessibility, responsiveness, and SEO through efficient rendering and semantic markup.",
      "Collaborated with markteting and design teams to improve UI/UX, conversion optimization, and SEO.",
      "Translated Figma designs into pixel-accurate, production-ready interfaces.",
      "Developed and maintained additional e-commerce websites using TALL stack <strong>(Tailwind CSS, Alpine.js, Laravel, and Livewire),</strong> focusing primarily on frontend development and UI implementation.",
    ],
  },
];

function Career() {
  return (
    <section id="career">
      <div className="mx-auto max-w-[500px] space-y-10 p-5 lg:max-w-[1200px] xl:px-0">
        <h2 className="text-primary text-3xl font-semibold lg:text-4xl">
          Career History
        </h2>

        <div>
          {careerHistories.map((item) => {
            return (
              <article
                key={item.companyName}
                className="space-y-3 rounded-xl border p-4"
              >
                <div className="flex justify-between gap-x-2.5">
                  <div className="space-y-1">
                    <h3 className="text-accent-seconday text-2xl font-bold lg:text-3xl">
                      {item.position}
                    </h3>

                    <p className="text-lg lg:text-xl">{item.companyName}</p>
                  </div>

                  <p className="text-end text-sm lg:text-base">{item.year}</p>
                </div>

                {item.contributions.map((contribution) => {
                  return (
                    <ul
                      key={contribution}
                      className="list-inside list-disc space-y-2 text-sm md:text-base"
                    >
                      <li dangerouslySetInnerHTML={{ __html: contribution }} />
                    </ul>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Career;
