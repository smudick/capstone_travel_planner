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

  removeItins = (e) => {
    const removedItin = this.state.savedItins.filter(
      (itin) => itin.firebaseKey === e.target.id,
    );
    itineraryData.deleteItinerary(removedItin[0].firebaseKey).then(() => {
      this.getSavedItins();
    });
  }

  render() {
    const showSavedItins = () => this.state.savedItins.map((itin) => (
        <ItineraryCard
          key={itin.firebaseKey}
          itin={itin}
          remove={this.removeItins}
        />
    ));
    return (
      <div>
        <div className='d-flex flex-wrap justify-content-center'>{showSavedItins()}</div>
      </div>
    );
  }
}
