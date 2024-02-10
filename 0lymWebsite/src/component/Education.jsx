import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/education.css";

function College() {
  return (
    <>
      <Row>
        <Col xs={10}>
          <p className="fs-4 schoolName">
            Nueva Ecija University of Science and Technology
          </p>
        </Col>
        <Col xs={2} className="my-auto">
          {" "}
          <p className="float-end fs-4 ">July 2023</p>
        </Col>
      </Row>
      <p>Bachelor of Science in Information Technology</p>
      <p>Major in Web Systems Technology</p>
    </>
  );
}
function Education() {
  return (
    <Row className="my-2">
      <h2 className="fs-1 my-1 text-center educationHeader">Education</h2>
      <College />
    </Row>
  );
}
export default Education;
