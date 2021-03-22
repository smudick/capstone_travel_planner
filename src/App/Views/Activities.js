import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';
import yelpCall from '../../Helpers/data/yelpData';
import Loader from '../Components/Loader';
import ResultsCard from '../Components/Cards/ResultsCard';
import SavedCard from '../Components/Cards/SavedCard';
import activitiesData from '../../Helpers/data/activitiesData';
import ActivityModal from '../Components/AppModals/ActivityModal';
import ActivityForm from '../Components/Forms/ActivityForm';

export default class Activities extends React.Component {
  state = {
    city: this.props.location.state.city,
    date: this.props.location.state.date,
    term: '',
    searchResults: [],
    savedActivities: [],
    searching: false,
    userId: this.props.location.state.userId,
  }

  componentDidMount() {
    this.getSavedCards();
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
      const resultsArr = response.slice(0, 5);
      const cleanResults = resultsArr.map((res) => (
        {
          yelpId: res.id,
          name: res.name,
          image_url: res.image_url,
          url: res.url,
          review_count: res.review_count,
          rating: res.rating,
          address: res.location.display_address,
          city: this.state.city,
          userId: this.state.userId,
        }
      ));
      this.setState({
        searchResults: cleanResults,
        searching: false,
      });
    });
  }

  saveResult = (e) => {
    const savedResult = this.state.searchResults.filter(
      (res) => res.yelpId === e.target.id,
    );
    // eslint-disable-next-line import/no-named-as-default-member
    activitiesData.saveSearchResults(savedResult[0]).then((response) => {
      this.getSavedCards();
      return (response);
    });
  }

  getSavedCards = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    activitiesData.getSavedActivities(this.state.city, this.state.userId).then((response) => {
      this.setState({
        savedActivities: response,
      });
    });
  }

  removeCard = (e) => {
    const removedActivity = this.state.savedActivities.filter(
      (act) => act.firebaseKey === e.target.id,
    );
    activitiesData.deleteActivities(removedActivity[0].firebaseKey).then(() => {
      this.getSavedCards();
    });
  }

  render() {
    const {
      city, searching, searchResults, savedActivities, date, userId,
    } = this.state;
    const showResults = () => searchResults.map((res) => (
      <ResultsCard
        key={res.yelpId}
        result={res}
        saveResult={this.saveResult}
      />
    ));
    const showSavedCards = () => savedActivities.map((act) => (
      <SavedCard
        key={act.firebaseKey}
        activity={act}
        remove={this.removeCard}
        update={this.getSavedCards}
      />
    ));
    return (
      <div>
        <div className='d-flex flex-column align-items-center'>
          <h2 className='mb-4 mt-2'>Search for things to do in {city}</h2>
          <Form inline onSubmit={this.handleSearch}>
            <FormGroup className='mb-4 mr-sm-2 mb-sm-0'>
              <Input
                type='text'
                name='term'
                id='activities-search'
                onChange={this.handleChange}
                value={this.state.term}
                placeholder='Ex: coffee or museum'
              />
            </FormGroup>
            <Button className='progress-btn'>Submit</Button>
          </Form>
          <h3 className='mb-4 mt-4'>Or, if you can't find what you're looking for</h3>
          <ActivityModal title={'Create A Custom Activity'} buttonLabel={'Create A Custom Activity'} btnClasses={'custom-btn'}>
            <ActivityForm onUpdate={this.getSavedCards} city={city} />
          </ActivityModal>
          </div>
          <div className='container mb-4 mt-4'>
            <div className='row'>
              <div className='col'>
                <h4>
                Search Results
                </h4>
                <div className='search-results'>
                  {searching ? (
                    <Loader />
                  ) : (
                  <div className='d-flex flex-wrap justify-content-center'>
                    {showResults()}
                  </div>
                  )}
                </div>
              </div>
              <div className='col'>
                <h4>
                  Saved Activities
                </h4>
                <div className='saved-activities'>
                  <div className='d-flex flex-wrap justify-content-center'>
                    {showSavedCards()}
                  </div>
                </div>
              </div>
            </div>
          <h2 className='mt-4 mb-4'>Once you’re happy with your saved activities, let’s create an itinerary!</h2>
          <Link to={{
            pathname: '/build-itinerary',
            state: {
              savedActivities,
              city,
              date,
              userId,
            },
          }}>
            <button className='btn progress-btn mt-2'>Build Itinerary</button>
          </Link>
      </div>
    </div>
    );
  }
}
