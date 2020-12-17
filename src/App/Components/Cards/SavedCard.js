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
        <div className='card-top'>
        <a href={activity.url} target='_blank' rel="noreferrer" className='card-img-container'>
          <CardImg className='card-img' top src={activity.image_url} alt={activity.name} />
        </a>
        <div className='title-review'>
          <CardTitle className='m-1' tag="h4">{activity.name}</CardTitle>
          {activity.yelpId ? (
            <CardSubtitle tag="h6" className="m-1 text-muted">Rating: {activity.rating} stars from {activity.review_count} reviews</CardSubtitle>
          ) : (
            <></>
          )}
          {(Array.isArray(activity.address)) ? (
            <CardText className='ml-1'>
                {displayAddress()}
            </CardText>
          ) : (
            <CardText className='ml-1'>{activity.address}</CardText>
          )}
          <div className='d-flex justify-content-center'>
            <ActivityModal title={'Edit Activity'} buttonLabel={'Edit'} btnClasses={'custom-btn'}>
              <ActivityForm onUpdate={this.props.update} activity={activity}/>
            </ActivityModal>
          </div>
        </div>
          <Button className='btn btn-danger remove-btn-act' id={activity.firebaseKey} onClick={(e) => remove(e)}>X</Button>
        </div>
      </Card>
    </div>
    );
  }
}
