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
              description="Developed a location-based web marketplace enabling users to buy/sell second-hand items, barter products, and participate in time-limited (double) auctions. The platform is built using React.js for the frontend and Spring Boot for backend RESTful APIs, with MySQL as the database. Features include real-time product listing updates, filter/sort functionality, user profiles with ratings and reviews, and unique modules for bartering and dropshipping. Designed and implemented a robust database schema to manage auctions, bids, timing, and user transactions."
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
