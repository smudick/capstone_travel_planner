import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Button,
  Container,
  Table,
} from 'reactstrap';
import ActivityModal from '../Components/AppModals/ActivityModal';

export default class ItineraryBuilder extends React.Component {
  render() {
    const timeDiv = [];
    function itinBuilder() {
      for (let i = 6; i <= 23; i += 1) {
        let hour = i;
        let hourType = 'AM';
        if (i > 12) {
          hourType = 'PM';
          hour = i - 12;
        } else if (i === 12) {
          hourType = 'PM';
        } else {
          hourType = 'AM';
          hour = i;
        }
        timeDiv.push(
          <tr>
            <td className='d-flex justify-content-center'>
              <h4>
                {hour} {hourType}
              </h4>
            </td>
            <td>
              <div>
                <ActivityModal title={'Select a Saved Activity'} buttonLabel={'Select a Saved Activity'} buttonColor={'secondary'}></ActivityModal>
              </div>
            </td>
          </tr>,
        );
      }
      return timeDiv;
    }
    return (
      <Container>
        <h2>Your Adventure is about to begin!</h2>
        <p>
          For each time slot, please select one of your saved activites and then
          save your itinerary
        </p>
        <Col>
          <div className='agenda'>
            <div className='table-responsive'>
              <Table bordered>
                <thead>
                  <tr>
                    <th className='agenda-time'>Time</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {itinBuilder()}
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
