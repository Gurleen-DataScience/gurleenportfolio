import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Gurleen Kaur </span>
            and I recently wrapped up my Postgraduate in Supply Chain Management
            and Global Logistics from{' '}
            <span className="purple">
              {' '}
              Felming College, Peterborough, Ontario, Canada.
            </span>
            Prior to that I did my Masters in Business Analytics from{' '}
            <span className="purple"> UMass, Lowell, Massachussetts, USA </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
