import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Header from "./component/Header";
import AboutMe from "./component/AboutMe";
import TechStack from "./component/TechStack";
import Projects from "./component/Projects";
import Career from "./component/Career";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Container>
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
        <Education />
      </Container>
    </>
  );
}

export default App;
