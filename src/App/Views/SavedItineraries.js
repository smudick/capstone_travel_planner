import React from 'react';
import { Link } from 'react-router-dom';
import itineraryData from '../../Helpers/data/itineraryData';
import ItineraryCard from '../Components/Cards/ItineraryCard';

export default class SavedItineraries extends React.Component {
  state = {
    userId: this.props.location.state.userId,
    savedItins: [],
  };

  componentDidMount() {
    this.getSavedItins();
  }

  getSavedItins = () => {
    itineraryData.getItineraries(this.state.userId).then((response) => {
      this.setState({
        savedItins: response,
      });
    });
  };

  render() {
    const showSavedItins = () => this.state.savedItins.map((itin) => (
        <ItineraryCard
          key={itin.firebaseKey}
          itin={itin}
          // remove={this.removeCard}
        />
    ));
    return (
      <div>
        <div className='d-flex flex-wrap justify-content-center'>{showSavedItins()}</div>
      </div>
    );
  }
}
