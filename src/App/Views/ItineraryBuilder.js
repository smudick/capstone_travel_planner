import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ActivityModal from '../Components/AppModals/ActivityModal';
import ScheduleForm from '../Components/Forms/ScheduleForm';

export default class ItineraryBuilder extends React.Component {
  state = {
    city: this.props.location.state.city,
    date: this.props.location.state.date,
    activities: this.props.location.state.savedActivities,
    userId: this.props.location.state.userId,
  };

  render() {
    const { activities, city, date } = this.state;
    return (
      <Container>
        <h2>Your {this.state.city} adventure is about to begin!</h2>
        <p>
          To build out your itinerary, please schedule your activities!
        </p>
        <div>
          <ActivityModal
            title={'Schedule a Saved Activity'}
            buttonLabel={'Schedule a Saved Activity'}
            buttonColor={'secondary'}
          >
            <ScheduleForm
              activities={activities}
              date={date}
              city={city}
            ></ScheduleForm>
          </ActivityModal>
        </div>
      </Container>
    );
  }
}
