import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

export default class ResultsCard extends Component {
  render() {
    const { result } = this.props;
    return (
      <div>
      <Card>
        <a href={result.url} target='_blank' rel="noreferrer">
          <CardImg top width="100%" src={result.image_url} alt={result.name} />
        </a>
        <CardBody>
          <CardTitle tag="h5">{result.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {result.rating} stars</CardSubtitle>
          <CardText>
            <p>
              {result.location.display_address[0]}
              <br></br>
              {result.location.display_address[1]}
            </p>
          </CardText>
          <Button className='save-btn'>Save</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}
