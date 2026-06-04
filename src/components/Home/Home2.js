import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Results-driven Full Stack Developer with 1+ year of professional
              experience building production-grade MERN stack applications and
              scalable backend systems.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), TypeScript, Java, Python, React.js, Next.js,
                  Node.js, and Express.js{" "}
                </b>
              </i>
              <br />
              <br />
              My areas of interest include building &nbsp;
              <i>
                <b className="purple">
                  MERN Stack Applications, Real-Time Systems, and API
                  Integrations{" "}
                </b>
                and also in areas related to{" "}
                <b className="purple">
                  System Design, Cloud Technologies, and Backend Architecture.
                </b>
              </i>
              <br />
              <br />
              Previously at <b className="purple">Versori (UK)</b>, I built
              automation solutions and integrated enterprise systems across
              REST, SOAP, and GraphQL APIs. Currently at{" "}
              <b className="purple">Phebsoft</b>, I lead backend development
              using
              <i>
                <b className="purple">
                  {" "}
                  Node.js, Express.js, MongoDB, and React/Next.js
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Abdullah3511"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdullahtayyab035"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ab_d_ullah___/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
