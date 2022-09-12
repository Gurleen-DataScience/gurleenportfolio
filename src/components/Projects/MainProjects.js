import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import Particle from '../Particle';
import Project1 from '../../images/Project1.jpeg';
import Project2 from '../../images/Project2.jpeg';
import Project3 from '../../images/Project3.jpeg';
import Project4 from '../../images/Project4.webp';

function MainProjects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project1}
              //   isBlog={false}
              title="Text Analysis"
              description="Twitter data to find sntiments of a tweet"
              //   ghLink="https://github.com/soumyajit4419/Chatify"
              //   demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project2}
              //   isBlog={false}
              title="Data Analysis"
              description="use data to clean anda anlyze, classification, clustering etc."
              //   ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              //   demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project3}
              //   isBlog={false}
              title="Restaurant Database"
              description="create data base for a restaurant to store employees info and transactions happen in a day"
              //   ghLink="https://github.com/soumyajit4419/Editor.io"
              //   demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project4}
              //   isBlog={false}
              title="Predict Conversion of Quotes to Sales"
              description="used dell's customer data to predict sales"
              //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MainProjects;
