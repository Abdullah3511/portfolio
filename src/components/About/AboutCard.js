import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdullah Tayyab </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I am a Full Stack Developer with 1+ year of professional experience
            building production-grade MERN stack applications and scalable
            backend systems.
            <br />
            <br />
            Currently working as a Full Stack Developer at{" "}
            <span className="purple">Phebsoft (Pvt.) Ltd</span>, leading
            backend development on core products. Previously worked as a
            Solutions Engineer at{" "}
            <span className="purple">Versori, United Kingdom (Remote)</span>,
            building automation solutions and enterprise integrations.
            <br />
            <br />
            I have completed BS Computer Science from{" "}
            <span className="purple">Hazara University, Mansehra</span>{" "}
            (2021–2025).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdullah Tayyab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
