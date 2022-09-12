import React, { Component } from 'react';
import { Grid, Container, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation';
import Card from 'react-bootstrap/Card';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div class=" jumboHome container-fluid text-lg-center p-5 text-white">
          {/* <Navigation /> */}
          <Row>
            <Col className="col-sm-4 justify-content-center">
              <div className="square-image"></div>
            </Col>
            <Col className="col-sm-4">
              <br></br>
              <h1
                className="h1-responsive"
                style={Object.assign(
                  { color: 'White' },
                  { marginTop: 40 },
                  { fontSize: 60 },
                  { fontFamily: 'Ariel' },
                  { textAlign: 'center' }
                )}
              >
                Hi! I'm Gurleen
              </h1>
              <br></br>
              <p className="p2"></p>I pursuing Postgraduate certificate in
              Supply Chain Management and Global Logistics.
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
