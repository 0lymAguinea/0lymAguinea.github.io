import Row from "react-bootstrap/Row";
import "../styles/aboutMe.css";

function PersonalInfo() {
  return (
    <>
      <p className="fs-2">
        Hi. I'm <span className="name fs-1 fw-semibold">Olym M. Aguinea</span>{" "}
      </p>
      <p className="fs-2">
        I am currently self-studying to become{" "}
        <span className="jobTitle">a front-end web developer.</span>
      </p>
    </>
  );
}

function AboutMe() {
  return (
    <main>
      <Row className="text-center mb-3">
        <PersonalInfo />
      </Row>
    </main>
  );
}
export default AboutMe;
