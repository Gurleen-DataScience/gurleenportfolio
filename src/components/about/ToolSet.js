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
        {/* <div class=" container-fluid text-lg-center p-5 text-white"> */}
        <Row className="justify-content-center ">
          <Col className="col-lg-12 justify-content-center">
            <Badge style={myBadgeStyle} bg="">
              Tableau
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              WEKA
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              Jupyter Notebook
            </Badge>{' '}
            <Badge style={myBadgeStyle} bg="">
              SAP
            </Badge>
          </Col>
        </Row>
        {/* </div> */}
      </section>
    );
  }
}
