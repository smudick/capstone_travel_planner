import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

export default class SavedCard extends Component {
  render() {
    const { activity } = this.props;
    const displayAddress = () => activity.address.map((line) => (
      `${line}
      
      `
    ));
    return (
      <div>
      <Card>
        <a href={activity.url} target='_blank' rel="noreferrer">
          <CardImg top width="100%" src={activity.image_url} alt={activity.name} />
        </a>
        <CardBody className='saved-card'>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {activity.rating} stars from {activity.review_count} reviews</CardSubtitle>
          <CardText>
              {displayAddress()}
          </CardText>
        </CardBody>
      </Card>
    </div>
    );
  }
}
