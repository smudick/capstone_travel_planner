import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';

export default class Activities extends React.Component {
  render() {
    const { city, date } = this.props.location.state;
    const displayDate = date.toDateString();
    return (
      <div>
        <div className="d-flex flex-column align-items-center">
          <h2 className='mb-4 mt-2'>Search for things to do in {city}</h2>
          <Form inline>
            <FormGroup className='mb-4 mr-sm-2 mb-sm-0'>
              <Input
                type='text'
                name='activities-search'
                className='act-search'
                id='activities-search'
                placeholder='Example: coffee or Starbucks'
              />
            </FormGroup>
            <Button className='progress-btn'>Submit</Button>
          </Form>
          <h3 className='mb-4 mt-4'>Or, if you can't find what you're looking for</h3>
          <Button className='custom-btn'>
            Build a custom activity
          </Button>
          </div>
          <div class="container mb-4 mt-4">
            <div class="row">
              <div class="col">
                <h4>
                Search Results
                </h4>
                <div className='search-results'></div>
              </div>
              <div class="col">
                <h4>
                  Saved Activities
                </h4>
                <div className='saved-activities'></div>
              </div>
            </div>
          </div>
          <Link to='/build-itinerary'>
            <button className='btn progress-btn mt-2'>Build Itinerary</button>
          </Link>
      </div>
    );
  }
}
