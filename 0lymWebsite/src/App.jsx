import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import Stacks from "./component/Skills";
import Career from "./component/Career";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import "./styles/app.css";

function App() {
  return (
    <div className="bg-brand-dark selection:bg-brand-accent selection:text-brand-dark font-sans text-slate-200 antialiased">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="bg-brand-accent/10 absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full blur-[128px]"></div>
        <div className="bg-brand-sky/10 absolute top-[35%] -right-40 h-[500px] w-[500px] rounded-full blur-[140px]"></div>
        <div className="bg-brand-emerald/10 absolute bottom-20 left-10 h-[450px] w-[450px] rounded-full blur-[130px]"></div>
        <div className="bg-grid bg-grid-pattern absolute inset-0 opacity-40"></div>
      </div>
      <Header />
      <main>
        <AboutMe />
        <Stacks />
        <Career />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
