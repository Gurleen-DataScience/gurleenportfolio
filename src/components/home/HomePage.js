import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainAbout from '../about/MainAbout';

import Tilt from 'react-parallax-tilt';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function HomePage() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>A LITTLE ABOUT ME</h1>
            <p className="home-about-body">
              I am recent graduate, who is passionate about analytics and
              problem solving to make data driven decisions.
              <br />
              <br />
              During my first job in{' '}
              <i>
                <b className="purple"> Renewable Energy Sector, </b>
              </i>
              I realized how data can play huge role in almost every industry to
              shape it better.
              <br />
              <br />
              My areas of Interest's are &nbsp;
              <i>
                <b className="purple">
                  Business Analytics, Supply Chain and Logistics Management{' '}
                </b>{' '}
                and
                <b className="purple"> Data Analytics.</b>
              </i>
              <br />
              <br />
              My recent interests includes learning about{' '}
              <i>
                <b className="purple"> Modern Cloud Technologies</b>
              </i>
              &nbsp; as more and more businesses are moving there day to day
              technological operations on public cloud, I think it is good idea
              get hands on to it.
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            {/* <h1>FIND ME ON</h1> */}
            <p>
              You can <span className="purple"> Connect </span> with me via:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
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
        {/* <MainAbout /> */}
      </Container>
    </Container>
  );
}
export default HomePage;
