import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import ActivityModal from '../Components/AppModals/ActivityModal';
import ScheduleForm from '../Components/Forms/ScheduleForm';
import itineraryData from '../../Helpers/data/itineraryData';
import joinTableData from '../../Helpers/data/joinTableData';
import activitiesData from '../../Helpers/data/activitiesData';
import ScheduleCard from '../Components/Cards/ScheduleCard';

export default class ItineraryBuilder extends React.Component {
  state = {
    city: this.props.location.state?.city || '',
    date: this.props.location.state?.date || '',
    activities: this.props.location.state?.savedActivities || '',
    userId: this.props.location.state?.userId || '',
    itineraryId: '',
    scheduledActivities: [],
  };

  componentDidMount() {
    if (Object.keys(this.props.match.params).length === 0) {
      let currentItin;
      itineraryData.getItineraries(this.state.userId).then((response) => {
        currentItin = response.filter((res) => res.date === this.state.date);
        const itineraryId = currentItin[0].firebaseKey;
        this.setState({
          itineraryId,
        });
        this.getActivities();
      });
    } else {
      const itinFirebaseKey = this.props.match.params.id;
      itineraryData.getSingleItinerary(itinFirebaseKey).then((response) => {
        activitiesData
          .getSavedActivities(response[0].city, response[0].userId)
          .then((actResponse) => {
            this.setState({
              city: response[0].city,
              date: response[0].date,
              userId: response[0].userId,
              itineraryId: response[0].firebaseKey,
              activities: actResponse,
            });
            this.getActivities();
          });
      });
    }
  }

  getActivities = () => {
    joinTableData
      .getScheduledActivities(this.state.itineraryId)
      .then((response) => {
        function compare(a, b) {
          const timeNumA = a.startTime.split(':');
          const timeNumB = b.startTime.split(':');
          const activityA = Number(timeNumA[0]);
          const activityB = Number(timeNumB[0]);

          let comparison = 0;
          if (activityA > activityB) {
            comparison = 1;
          } else if (activityA < activityB) {
            comparison = -1;
          }
          return comparison;
        }
        const orderedActivities = response.sort(compare);
        this.setState({
          scheduledActivities: orderedActivities,
        });
      });
  };

  removeScheduledActivity = (e) => {
    const removedActivity = this.state.scheduledActivities.filter(
      (act) => act.firebaseKey === e.target.id,
    );
    joinTableData
      .removeScheduledActivities(removedActivity[0].firebaseKey)
      .then(() => {
        this.getActivities();
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
        <ScheduleCard
          key={act.firebaseKey}
          activities={activities}
          activity={act}
          remove={this.removeScheduledActivity}
          update={this.getActivities}
        />));
    return (
      <Container>
        <h2 className='mb-1'>Your {city} adventure is about to begin!</h2>
        <h6 className='m-3'>
          To build out your itinerary, please schedule your activities
        </h6>
        <div>
          <div className='schedule-btn'>
            <ActivityModal
              title={'Schedule a Saved Activity'}
              buttonLabel={'Schedule an Activity'}
              btnClasses={'progress-btn'}
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
          </div>
          <div className='d-flex flex-column align-content-center itin'>
            {showSchedule()}
          </div>
          <h5 className='m-2'>Once your schedule is filled up, save your itinerary!</h5>
          <div className='d-flex justify-content-between mb-3'>
          <Link
              to={{
                pathname: '/activities',
                state: {
                  city: this.state.city,
                  date: this.state.date,
                  userId: this.state.userId,
                },
              }}
            >
              <Button className='btn custom-btn mt-2'>Add More Activities</Button>
            </Link>
          <Link
            to={{
              pathname: '/saved-itineraries',
              state: {
                userId,
              },
            }}
          >
            <Button className='btn progress-btn mt-2'>Save Itinerary</Button>
          </Link>
          </div>
        </div>
      </Container>
    );
  }
}
