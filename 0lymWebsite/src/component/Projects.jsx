import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../styles/projects.css";

function VanillaJSProjects() {
  return (
    <>
      <h3 className="fs-3">Vanilla JS</h3>
      <Card className="mb-4">
        <Card.Img />
        <Card.Body>
          <Card.Title className="projectTitle fs-2">TO-DO App</Card.Title>
          <Card.Text>(Basic design. Main focus is on functionality.)</Card.Text>
          <Card.Text>
            A simple todo app that you can use. Have different sections such as
            today, tomorrow, pick a date. You can also choose base on priority
            level (low,medium,high priority)
          </Card.Text>
          <Card.Text>Used localStorage</Card.Text>
          <Row className="text-center">
            <Col md={6} className="my-auto">
              <a href="#">
                <Button className="mb-2">Live preview</Button>
              </a>
            </Col>
            <Col md={6}>
              <a href="#">
                <Button>
                  {" "}
                  <Row>
                    <Col className="my-auto">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        className="githubIcon "
                      />
                    </Col>
                    <Col>Source code</Col>
                  </Row>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Img />
        <Card.Body>
          <Card.Title className="projectTitle fs-2">Battleship</Card.Title>
          <Card.Text>(Basic design. Main focus is on functionality.)</Card.Text>
          <Card.Text>
            A classic board game comes into browser. You can play with your
            friends 1v1.
          </Card.Text>
          <Card.Text>Online is not available</Card.Text>
          <Row className="text-center">
            <Col md={6} className="my-auto">
              <a href="#">
                <Button className="mb-2">Live preview</Button>
              </a>
            </Col>
            <Col md={6}>
              <a href="#">
                <Button>
                  {" "}
                  <Row>
                    <Col className="my-auto">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        className="githubIcon "
                      />
                    </Col>
                    <Col>Source code</Col>
                  </Row>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Img />
        <Card.Body>
          <Card.Title className="projectTitle fs-2">Tic Tac Toe</Card.Title>
          <Card.Text>(Basic design. Main focus is on functionality.)</Card.Text>
          <Card.Text>
            A two-player game where the first to get three consecutive wins wins
            the game
          </Card.Text>
          <Card.Text>Online is not available</Card.Text>
          <Row className="text-center">
            <Col md={6} className="my-auto">
              <a href="#">
                <Button className="mb-2">Live preview</Button>
              </a>
            </Col>
            <Col md={6}>
              <a href="#">
                <Button>
                  {" "}
                  <Row>
                    <Col className="my-auto">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        className="githubIcon "
                      />
                    </Col>
                    <Col>Source code</Col>
                  </Row>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Img />
        <Card.Body>
          <Card.Title className="projectTitle fs-2">Calculator</Card.Title>
          <Card.Text>A basic calculator</Card.Text>
          <Row className="text-center">
            <Col md={6} className="my-auto">
              <a href="#">
                <Button className="mb-2">Live preview</Button>
              </a>
            </Col>
            <Col md={6}>
              <a href="#">
                <Button>
                  {" "}
                  <Row>
                    <Col className="my-auto">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        className="githubIcon "
                      />
                    </Col>
                    <Col>Source code</Col>
                  </Row>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

function ReactProjects() {
  return (
    <>
      <h3 className="fs-3">React projects</h3>
      <Card>
        <Card.Img />
        <Card.Body>
          <Card.Title className="projectTitle fs-2">CV Maker</Card.Title>
          <Card.Text>
            An application that shows a real-time preview of your resume. It can
            also be printed as a PDF file on the spot.
          </Card.Text>
          <Card.Text>Used reactToPrint library for printing to PDF</Card.Text>
          <Row className="text-center">
            <Col md={6} className="my-auto">
              <a href="#">
                <Button className="mb-2">Live preview</Button>
              </a>
            </Col>
            <Col md={6}>
              <a href="#">
                <Button>
                  {" "}
                  <Row>
                    <Col className="my-auto">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        className="githubIcon "
                      />
                    </Col>
                    <Col>Source code</Col>
                  </Row>
                </Button>
              </a>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

function Projects() {
  return (
    <section>
      <Row>
        <h2 className="text-center fs-1 my-5  projectHeader">
          Personal Projects
        </h2>
        <Col md={6}>
          <ReactProjects />
        </Col>
        <Col md={6}>
          <VanillaJSProjects />
        </Col>
      </Row>
    </section>
  );
}
export default Projects;
