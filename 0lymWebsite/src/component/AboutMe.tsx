interface Items {
  items: string[];
}

function Lists({ items }: Items) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm font-medium md:text-base">
      {items.map((item) => {
        return (
          <li key={item} className="w-fit rounded-full border px-2 py-1.5">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function AboutMe() {
  const profileLinks = [
    {
      icon: "github",
      text: "GitHub",
      link: "https://github.com/0lymAguinea/",
    },
    {
      icon: "linkedin",
      text: "LinkedIn",
      link: "https://linkedin.com/in/olym-aguinea-9a51512b4",
    },
    {
      icon: "email",
      text: "Email me",
      link: "mailto:aguineaolymm@gmail.com",
    },
    {
      icon: "phone",
      text: "Call me",
      link: "mailto:09496931951",
    },
  ];

  const languages = [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "Nuxt",
    "React.js",
    "Next.js",
    "React Native",
    "Alpine.js",
    "Tailwind CSS",
    "Bootstrap",
    "CSS",
    "HTML",
  ];

  const tools = [
    "VS Code",
    "Vite",
    "Git",
    "GitHub",
    "Bitbucket",
    "Figma",
    "Vercel",
    "REST APIs",
    "NPM",
    "Webpack",
    "Babel",
    "Google Tag Manager",
    "GA4",
  ];

  return (
    <section id="about">
      <div className="mx-auto grid max-w-[500px] gap-x-5 gap-y-10 p-5 lg:max-w-[1200px] lg:grid-cols-2 xl:px-0">
        <div className="space-y-2 lg:my-auto">
          <p className="border-accent-primary text-success w-fit rounded-full border px-2 py-1 text-xs font-semibold">
            Status: Available
          </p>

          <h1 className="font-roboto text-3xl lg:text-5xl">
            Hello there! I&apos;m
            <br />
            <span className="text-primary text-5xl font-bold lg:text-7xl">
              Olym Aguinea
            </span>
          </h1>

          <p className="text-2xl">
            A{" "}
            <span className="text-accent-seconday font-semibold">frontend</span>{" "}
            web developer
          </p>

          <div className="flex gap-x-4">
            {profileLinks.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.text}
                  target="_blank"
                  className="hover:text-primary focus:text-primary flex gap-x-2 text-lg font-medium transition-colors ease-in-out hover:underline"
                >
                  <img width={16} height={16} src={`/${item.icon}.svg`} />

                  <span>{item.text}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-primary text-3xl font-semibold lg:text-4xl">
            Stack & Tools
          </h2>

          <div className="space-y-2">
            <h3 className="text-accent-seconday text-2xl font-medium lg:text-3xl">
              Frontend
            </h3>

            <Lists items={languages} />
          </div>

          <div className="space-y-2">
            <h3 className="text-accent-seconday text-2xl font-medium lg:text-3xl">
              Tools
            </h3>

            <Lists items={tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
