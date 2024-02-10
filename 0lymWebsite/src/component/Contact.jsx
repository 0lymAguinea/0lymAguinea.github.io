import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useRef, useState } from "react";
import "../styles/contact.css";

function AlertMessage({ variant, heading, message }) {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{heading}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}

function ContactForm() {
  const [alert, setAlert] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_awwowj7", "template_9zmuaye", form.current, {
        publicKey: "hwOHfz4Ki6BthMDtN",
      })
      .then(
        () => {
          setAlert(
            <AlertMessage
              variant="success"
              heading="Email sent successfully."
              message="Thank you for emailing me. I will reply to you as soon as possible."
            />
          );
        },
        (error) => {
          setAlert(
            <AlertMessage
              variant="danger"
              heading="Email sent unsuccessful."
              message="Please try again."
            />
          );
          console.error(error);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      {alert}
      <Form.Group controlId="from_name">
        <Form.Label className="fs-4">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name."
          name="from_name"
          required
        />
      </Form.Group>
      <Form.Group controlId="from_email">
        <Form.Label className="fs-4">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email."
          name="from_email"
          required
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label className="fs-4">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message."
          name="message"
          required
        ></Form.Control>
      </Form.Group>
      <Button type="submit" className="mt-3">
        Send email
      </Button>
    </Form>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="contactHeader fs-1 text-center mt-1">Contact Me</h2>
      <Row>
        <ContactForm />
      </Row>
    </section>
  );
}
export default Contact;
