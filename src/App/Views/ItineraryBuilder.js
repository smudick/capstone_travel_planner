import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Table } from 'reactstrap';
import ActivityModal from '../Components/AppModals/ActivityModal';
import ScheduleForm from '../Components/Forms/ScheduleForm';

export default class ItineraryBuilder extends React.Component {
  state = {
    city: this.props.location.state.city,
    date: this.props.location.state.date,
    activities: this.props.location.state.savedActivities,
  };

  render() {
    const { activities } = this.state;
    return (
      <Container>
        <h2>Your {this.state.city} Adventure is about to begin!</h2>
        <p>
          For each time slot, please select one of your saved activities and
          then save your itinerary
        </p>
        <Col>
          <div className='agenda'>
            <div className='table-responsive'>
              <Table bordered>
                <thead>
                  <tr>
                    <th className='agenda-time'>
                      {this.state.date.toDateString()}
                    </th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        6 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={6}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                      7 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={7}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                      8 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={8}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        9 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={9}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        10 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={10}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        11 AM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={11}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        12 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={12}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        1 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={13}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        2 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={14}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        3 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={15}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        4 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={16}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        5 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={17}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        6 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={18}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        7 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={19}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        8 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={20}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        9 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={21}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        10 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={22}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='d-flex justify-content-center'>
                      <h4>
                        11 PM
                      </h4>
                    </td>
                    <td>
                      <div>
                        <ActivityModal
                          key={23}
                          title={'Select a Saved Activity'}
                          buttonLabel={'Select a Saved Activity'}
                          buttonColor={'secondary'}
                        >
                          <ScheduleForm activities={activities}></ScheduleForm>
                        </ActivityModal>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <Link to='/saved-itineraries'>
            <button className='btn btn-secondary save-btn'>
              Save Your Itinerary
            </button>
          </Link>
        </Col>
      </Container>
    );
  }
}
