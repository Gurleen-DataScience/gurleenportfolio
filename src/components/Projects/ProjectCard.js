import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <h3 style={{ color: '#5dd8e9', fontWeight: '500' }}>{props.title}</h3>
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
