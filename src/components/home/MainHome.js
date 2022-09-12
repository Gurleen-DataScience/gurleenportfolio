import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from '../../images/profilePicCrop.png';
import Particle from '../Particle';
import HomePage from './HomePage';
// import Type from './Type';

function MainHome() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ paddingBottom: 15 }}>
                I'm
                <strong className="main-name"> Gurleen Kaur</strong>
              </h1>

              <h1 className="highlight-name" style={{ paddingBottom: 25 }}>
                Business Analytics | Supply Chain Management | Logistics
                Management | Data Analysis | Python | SQL
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                {/* <Type /> */}
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  //   maxHeight: '450px',
                  borderWidth: 10,
                  borderRadius: 300 / 2,
                  width: 300,
                  height: 300,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomePage />
    </section>
  );
}

export default MainHome;
