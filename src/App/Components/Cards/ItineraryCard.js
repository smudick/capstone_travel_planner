import React, { Component } from 'react';
import {
  Card, CardImg, CardBody, CardTitle, Button,
} from 'reactstrap';

export default class ItineraryCard extends Component {
  imageSelector() {
    switch (this.props.itin.city) {
      case 'Nashville':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Fnashville.jpg?alt=media&token=959c2c55-1271-4989-820b-4545f1fd0f3a';

      case 'Los Angeles':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Fla.jpg?alt=media&token=18132d4d-c254-4d48-abdf-bc45c64b7369';

      case 'Amsterdam':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Famsterdam.jpg?alt=media&token=e8a008d3-871c-4184-8577-63c97bb0b6aa';

      case 'Chicago':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Fchicago.jpeg?alt=media&token=d2991eec-d358-42ab-b6a0-3c54b3d34151';

      case 'Paris':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Fparis.jpg?alt=media&token=36e3d504-6c25-41ba-bb67-2131ffdeafef';

      case 'London':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Flondon.jpg?alt=media&token=0ae65718-99ae-49a6-8246-48d9c87bb75a';

      case 'New York City':
        return 'https://firebasestorage.googleapis.com/v0/b/travel-planner-7b38c.appspot.com/o/travel-planner%2Fcity_images%2Fnyc.jpg?alt=media&token=18e55e6e-2ea2-4770-a387-217a0bcdbcc5';

      default:
        return 'something went wrong';
    }
  }

  render() {
    const { itin, remove } = this.props;
    return (
      <div>
        <Card className='progress-btn home-btn'>
          <CardBody>
            <CardTitle tag='h4'>{itin.city}</CardTitle>
            <CardTitle tag='h5'>{itin.date}</CardTitle>
            <CardImg src={this.imageSelector()}></CardImg>
            <Button className='btn btn-danger' id={itin.firebaseKey} onClick={(e) => remove(e)}>Delete</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
