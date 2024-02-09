import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import "../styles/contact.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_awwowj7", "template_9zmuaye", form.current, {
        publicKey: "hwOHfz4Ki6BthMDtN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group controlId="from_name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name." name="from_name" />
      </Form.Group>
      <Form.Group controlId="from_email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email."
          name="from_email"
        />
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter message."
          name="message"
        ></Form.Control>
      </Form.Group>
      <Button type="submit">Send email</Button>
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
