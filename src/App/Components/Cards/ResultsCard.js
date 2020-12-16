import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

export default class ResultsCard extends Component {
  render() {
    const { result, saveResult } = this.props;
    const displayAddress = () => result.address.map((line) => (
      `${line}
      
      `
    ));
    return (
      <div>
      <Card>
        <a href={result.url} target='_blank' rel="noreferrer">
          <CardImg className='card-img' top width="100%" src={result.image_url} alt={result.name} />
        </a>
        <CardBody>
          <CardTitle tag="h5">{result.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {result.rating} stars from {result.review_count} reviews</CardSubtitle>
          <CardText>
              {displayAddress()}
          </CardText>
          <Button className='save-btn' id={result.yelpId} onClick={(e) => saveResult(e)}>Save</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}
