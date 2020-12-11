import React from 'react';
import { Link } from 'react-router-dom';

export default class ItineraryBuilder extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Your Adventure is about to begin!</h2>
            <p>
              For each time slot, please select one of your saved activites and
              then save your itinerary
            </p>
            <h4>Saved Activities</h4>
            <div className='saved-activities'>
              <div className='d-flex flex-wrap justify-content-center'>
                {this.props.location.props.showCards.showSavedCards()}
              </div>
            </div>
            <button className='btn btn-success'>
              <Link to='/activities'>Add More Activities</Link>
            </button>
          </div>
          <div className='col'>
            <div className='agenda'>
              <div className='table-responsive'>
                <table className='table table-condensed table-bordered'>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className='agenda-date'
                        rowspan='1'
                      >
                        <div className='dayofmonth'>26</div>
                        <div className='dayofweek'>Saturday</div>
                        <div className='shortdate text-muted'>July, 2014</div>
                      </td>
                      <td className='agenda-time'>5:30 AM</td>
                      <td className='agenda-events'>
                        <div className='agenda-event'>
                          <i
                            className='glyphicon glyphicon-repeat text-muted'
                            title='Repeating event'
                          ></i>
                            Fishing
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='agenda-date' rowspan='3'>
                        <div className='dayofmonth'>24</div>
                        <div className='dayofweek'>Thursday</div>
                        <div className='shortdate text-muted'>July, 2014</div>
                      </td>
                      <td className='agenda-time'>8:00 - 9:00 AM</td>
                      <td className='agenda-events'>
                        <div className='agenda-event'>Doctor's Appointment</div>
                      </td>
                    </tr>
                    <tr>
                      <td className='agenda-time'>10:15 AM - 12:00 PM</td>
                      <td className='agenda-events'>
                        <div className='agenda-event'>
                          Meeting with executives
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className='agenda-time'>7:00 - 9:00 PM</td>
                      <td className='agenda-events'>
                        <div className='agenda-event'>Aria's dance recital</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button className='btn btn-secondary'>
              <Link to='/saved-itineraries'>Save Your Itinerary</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
