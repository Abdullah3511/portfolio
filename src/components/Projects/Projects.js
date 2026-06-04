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
              title="Matchwise: AI-Powered Skill & Compatibility Analysis"
              description="Developed the backend of an AI-powered career analysis platform using Node.js, Express.js, and MySQL. Implemented AI-driven skill analysis workflows using OpenAI APIs with structured JSON response enforcement. Integrated O*NET occupational datasets for compatibility scoring, building complex data mapping and processing pipelines. Implemented Firebase Authentication for secure user management."
              ghLink="https://github.com/Abdullah3511"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TradeSquare: Real-Time Dual Auction Marketplace"
              description="Built a full-stack marketplace with dual auction (buy/sell + bartering) supporting concurrent real-time bidding via WebSockets. Implemented role-based access control, secure JWT authentication, and session management. Optimized MongoDB aggregation pipelines and indexing strategies for high-volume bidding operations. Designed the backend architecture from scratch including data modeling, API structure, and real-time event handling."
              ghLink="https://github.com/Abdullah3511/Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Offline ERP Desktop Application"
              description="Engineered a fully offline ERP desktop system using Electron and better-sqlite3 with automated local backup and recovery. Secured the application with machine-bound JWT licensing to prevent unauthorized redistribution. Designed a modern, responsive UI with React and Tailwind CSS; optimized SQLite queries for datasets exceeding 100K rows."
              ghLink="https://github.com/Abdullah3511"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
