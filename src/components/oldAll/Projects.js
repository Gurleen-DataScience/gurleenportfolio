import React, { Component } from 'react';

import { Card, CardGroup } from 'react-bootstrap';
const styleCardTitle = {
  color: 'rgb(80, 37, 37)',
  fontSize: 30,
  fontFamily: '"Gill Sans", sans-serif',
  textAlign: 'center',
};

const styleCardText = {
  color: 'grey',
  fontSize: 18,
  fontFamily: 'Ariel',
};
export default class About extends Component {
  render() {
    return (
      <section id="projects">
        <div class=" jumboProjects container-fluid text-lg-center p-5 text-white">
          <h1
            className="h1-responsive"
            style={Object.assign(
              { color: 'Grey' },
              { marginTop: 5 },
              { fontSize: 60 },
              { fontFamily: 'Ariel' },
              { textAlign: 'center' }
            )}
          >
            Projects
          </h1>
          <CardGroup>
            <Card className="card-Projects ">
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title style={Object.assign(styleCardTitle)}>
                  Project1
                </Card.Title>
                <Card.Text
                  className="text-center text-md-left"
                  style={Object.assign(styleCardText)}
                >
                  hello1
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            <Card className="card-Projects ">
              <Card.Body>
                <Card.Title style={Object.assign(styleCardTitle)}>
                  Project2
                </Card.Title>
                <Card.Text
                  className="text-center text-md-left"
                  style={Object.assign(styleCardText)}
                >
                  Hello2
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="card-Projects ">
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title style={Object.assign(styleCardTitle)}>
                  Project3
                </Card.Title>
                <Card.Text
                  className="text-center text-md-left"
                  style={Object.assign(styleCardText)}
                >
                  Hello3
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            <Card className="card-Projects ">
              <Card.Body>
                <Card.Title style={Object.assign(styleCardTitle)}>
                  Project4
                </Card.Title>
                <Card.Text
                  className="text-center text-md-left"
                  style={Object.assign(styleCardText)}
                >
                  Hello 4
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </section>
    );
  }
}
