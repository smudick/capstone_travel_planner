import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import ActivityModal from '../AppModals/ActivityModal';
import ActivityForm from '../Forms/ActivityForm';

export default class SavedCard extends Component {
  render() {
    const { activity, remove } = this.props;
    const displayAddress = () => activity.address.map((line) => (
      `${line}
        
        `
    ));
    return (
      <div>
      <Card className='saved-card'>
        <a href={activity.url} target='_blank' rel="noreferrer">
          <CardImg className='card-img' top width="100%" src={activity.image_url} alt={activity.name} />
        </a>
        <CardBody>
          <CardTitle tag="h5">{activity.name}</CardTitle>
          {activity.yelpId ? (
            <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {activity.rating} stars from {activity.review_count} reviews</CardSubtitle>
          ) : (
            <></>
          )}
          {(Array.isArray(activity.address)) ? (
            <CardText>
                {displayAddress()}
            </CardText>
          ) : (
            <CardText>{activity.address}</CardText>
          )}
          <div className='d-flex justify-content-center'>
            <ActivityModal title={'Edit Activity'} buttonLabel={'Edit Activity'} buttonColor={'success'}>
              <ActivityForm onUpdate={this.props.update} activity={activity}/>
            </ActivityModal>
            <Button className='btn btn-danger' id={activity.firebaseKey} onClick={(e) => remove(e)}>Remove</Button>
          </div>
        </CardBody>
      </Card>
    </div>
    );
  }
}
