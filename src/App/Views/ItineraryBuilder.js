import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import ActivityModal from '../Components/AppModals/ActivityModal';
import ScheduleForm from '../Components/Forms/ScheduleForm';
import itineraryData from '../../Helpers/data/itineraryData';
import joinTableData from '../../Helpers/data/joinTableData';
import ScheduleCard from '../Components/Cards/ScheduleCard';

export default class ItineraryBuilder extends React.Component {
  state = {
    city: this.props.location.state.city,
    date: this.props.location.state.date,
    activities: this.props.location.state.savedActivities,
    userId: this.props.location.state.userId,
    itineraryId: '',
    scheduledActivities: [],
  };

  componentDidMount() {
    let currentItin;
    itineraryData.getItineraries(this.state.userId).then((response) => {
      currentItin = response.filter((res) => res.date === this.state.date);
      const itineraryId = currentItin[0].firebaseKey;
      this.setState({
        itineraryId,
      });
      this.getActivities();
    });
  }

  getActivities = () => {
    joinTableData
      .getScheduledActivities(this.state.itineraryId)
      .then((response) => {
        this.setState({
          scheduledActivities: response,
        });
      });
  };

  render() {
    const {
      activities,
      city,
      date,
      itineraryId,
      userId,
      scheduledActivities,
    } = this.state;
    const showSchedule = () => scheduledActivities.map((act) => (
        <ScheduleCard key={act.firebaseKey} activity={act} />
    ));
    return (
      <Container>
        <h2>Your {city} adventure is about to begin!</h2>
        <p>To build out your itinerary, please schedule your activities!</p>
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
              itineraryId={itineraryId}
              userId={userId}
              update={this.getActivities}
            ></ScheduleForm>
          </ActivityModal>
          <div className='d-flex flex-column align-content-center'>
            {showSchedule()}
          </div>
        </div>
      </Container>
    );
  }
}
