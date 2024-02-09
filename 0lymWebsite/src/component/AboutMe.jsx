import Row from "react-bootstrap/Row";
import "../styles/aboutMe.css";

function PersonalInfo() {
  return (
    <>
      <h2 className="fs-2">Hi. I'm </h2>
      <h1 className="name fs-1 fw-semibold">Olym M. Aguinea</h1>
      <p className="fs-2">
        I am currently doing self-study to become{" "}
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
