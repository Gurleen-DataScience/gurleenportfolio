import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

export default class Skills extends Component {
  render() {
    const myBadgeStyle = {
      display: 'inline-block',
      fontSize: '125%',
      fontWeight: '400',
      //color: '#623686',
      backgroundColor: '#2c5a8b',
      borderRadius: '1.25rem',
      borderColor: 'red',
      textAlign: 'center',
      padding: '0.3em',
      marginTop: '0.25em',
    };
    return (
      <section id="skills">
        {/* <div class=" jumboSkills container-fluid text-lg-center p-5 text-white"> */}

        <Row className="justify-content-center ">
          <Col className="col-lg-12 justify-content-center">
            <Badge style={myBadgeStyle} bg="">
              SQL
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Python
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Data Visualizayion
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Data Preprocessing
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Data Mining
            </Badge>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="col-lg-12 justify-content-center">
            <Badge style={myBadgeStyle} bg="">
              Decision Making
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Vendor Management
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Business Intelligence
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Business Analytics
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Microsoft Excel
            </Badge>
          </Col>
        </Row>
        {/* </div> */}
      </section>
    );
  }
}
