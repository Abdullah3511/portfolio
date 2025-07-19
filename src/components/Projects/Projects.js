import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="TradeSquare"
              description="A local community-driven web application for buying, selling, bartering, and participating in time-limited double auctions. Built with React.js, Spring Boot, and MySQL, this platform allows users to list second-hand items, exchange goods, dropship products, and engage in one-hour auctions. Features include product ratings, like/dislike options, location-based item visibility, and real-time listing updates."
              ghLink="https://github.com/Abdullah3511/Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce Web Application"
              description="A full-stack e-commerce application for managing products and orders with admin and user functionality. Users can browse products by category, add or remove items from the cart, and place orders, while admins can manage inventory and categories. Developed using Spring Boot for backend and React.js for frontend, ensuring dynamic interaction and smooth user experience."
              ghLink="https://github.com/Abdullah3511/PersonalBrandProject"              
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Rent Car Managment"
              description="A desktop-based application built using Core Java for managing car rentals, returns, and customer records without using a database. The system uses Java File I/O for persistent data storage. It includes modules for vehicle registration, booking management, customer details, rental history, and availability tracking."
              ghLink="https://github.com/Abdullah3511/Rent-Car-Managment"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
