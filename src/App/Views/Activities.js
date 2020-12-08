import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import yelpCall from '../../Helpers/data/yelpData';
import Loader from '../Components/Loader';

export default class Activities extends React.Component {
  state = {
    city: this.props.location.state.city,
    date: this.props.location.state.date,
    term: '',
    searchResults: [],
    searching: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchResults: [],
      searching: true,
    });

    yelpCall(this.state.city, this.state.term).then((response) => {
      const resultsArr = response[0].slice(0, 5);
      this.setState({
        searchResults: resultsArr,
        searching: false,
      });
    });
  }

  render() {
    const { city, searching, searchResults } = this.state;
    searchResults.map((res) => (
      console.warn(res.name, res.rating, res.url, res.image_url, res.location.display_address[0])
    ));
    return (
      <div>
        <div className="d-flex flex-column align-items-center">
          <h2 className='mb-4 mt-2'>Search for things to do in {city}</h2>
          <Form inline onSubmit={this.handleSearch}>
            <FormGroup className='mb-4 mr-sm-2 mb-sm-0'>
              <Input
                type='text'
                name='term'
                id='activities-search'
                onChange={this.handleChange}
                value={this.state.term}
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
          <div className="container mb-4 mt-4">
            <div className="row">
              <div className="col">
                <h4>
                Search Results
                </h4>
                <div className='search-results'>
                  {searching ? (
                    <Loader />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col">
                <h4>
                  Saved Activities
                </h4>
                <div className='saved-activities'></div>
              </div>
            </div>
          </div>
          <h2 className='mt-4 mb-4'>Once you’re happy with your saved activities, let’s create an itinerary!</h2>
          <Link to='/build-itinerary'>
            <button className='btn progress-btn mt-2'>Build Itinerary</button>
          </Link>
      </div>
    );
  }
}
