import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import "../styles/techstack.css";

function ProgrammingVersionControlAndDevTool() {
  return (
    <>
      <Row>
        <Figure className="text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            className="techStackImg gitHub mx-2"
            alt="GitHub"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            className="techStackImg mx-2"
            alt="Git"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
            className="techStackImg mx-2"
            alt="Visual Studio Code"
          />
        </Figure>
      </Row>
    </>
  );
}

function ProgrammingToolsAndPackageManagers() {
  return (
    <>
      <Row>
        <Figure className="text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
            className="techStackImg mx-2"
            alt="ViteJS"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
            className="techStackImg mx-2"
            alt="Webpack"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            className="techStackImg mx-2"
            alt="NPM"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg"
            className="techStackImg mx-2"
            alt="Babel"
          />
        </Figure>
      </Row>
    </>
  );
}

function ProgrammingFrameworksAndLibraries() {
  return (
    <>
      <Row>
        <Figure className="text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="techStackImg mx-2"
            alt="React"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
            className="techStackImg mx-2"
            alt="React bootstrap"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
            className="techStackImg mx-2"
            alt="Bootstrap"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
            className="techStackImg mx-2"
            alt="SASS"
          />
        </Figure>
      </Row>
    </>
  );
}

function ProgrammingLanguages() {
  return (
    <>
      <Row>
        <Figure className="text-center">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            className="techStackImg mx-2"
            alt="HTML"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            className="techStackImg mx-2"
            alt="CSS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="techStackImg mx-2"
            alt="JavaScript"
          />
        </Figure>
      </Row>
    </>
  );
}

function TechStack() {
  return (
    <section className="mt-3">
      <Row>
        <h2 className="text-center techStackHeader">Programming languages</h2>
        <ProgrammingLanguages />
        <h2 className="text-center techStackHeader">
          Frameworks and Libraries
        </h2>
        <ProgrammingFrameworksAndLibraries />
        <h2 className="text-center techStackHeader">
          Build Tools and Package managers
        </h2>
        <ProgrammingToolsAndPackageManagers />
        <h2 className="text-center techStackHeader">
          Version control and Development tool
        </h2>
        <ProgrammingVersionControlAndDevTool />
      </Row>
    </section>
  );
}
export default TechStack;
