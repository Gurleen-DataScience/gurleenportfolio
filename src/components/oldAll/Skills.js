import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

export default class Skills extends Component {
  render() {
    return (
      <section id="skills">
        <div class=" jumboSkills container-fluid text-lg-center p-5 text-white">
          <h1
            className="h1-responsive"
            style={Object.assign(
              { color: 'Grey' },
              { marginTop: 1 },
              { fontSize: 40 },
              { fontFamily: 'Ariel' },
              { textAlign: 'center' }
            )}
          >
            Skills &amp; Technologies
          </h1>
          <Row className="justify-content-center ">
            <Col className="col-lg-12 justify-content-center">
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                SQL
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Tableau
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                WEKA
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Python
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Data Visualizayion
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Data Preprocessing
              </Badge>
            </Col>
          </Row>
          <br></br>
          <Row className="justify-content-center">
            <Col className="col-lg-12 justify-content-center">
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Data Mining
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Decision Making
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Vendor Management
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Business Intelligence
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Business Analytics
              </Badge>
              <Badge
                className="badge-c"
                style={{ fontSize: 20 }}
                pill
                bg="secondary"
              >
                Microsoft Excel
              </Badge>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
