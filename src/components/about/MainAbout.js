import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
// import Github from './Github';
import SkillSet from './SkillSet';
import Aboutcard from './AboutCard';
import aboutMeImage from '../../images/aboutMeImage2.webp';
import ToolSet from './ToolSet';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px',
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              More <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: '120px', paddingBottom: '50px' }}
            className="about-img"
          >
            <img
              src={aboutMeImage}
              alt="about"
              className="img-fluid"
              width="100%"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Aptitude </strong>
        </h1>

        <SkillSet />

        <h1 className="project-heading">
          <strong className="purple">Tools </strong> I used
        </h1>
        <ToolSet />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
