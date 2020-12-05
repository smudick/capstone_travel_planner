import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../App/Views/Home';
import Activities from '../App/Views/Activities';
import ItineraryBuilder from '../App/Views/ItineraryBuilder';
import SavedItineraries from '../App/Views/SavedItineraries';
import SingleItinerary from '../App/Views/SingleItinerary';
import NotFound from '../App/Views/NotFound';

export default function Routes() {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home />}
        />
        <Route
          exact
          path='/activities'
          component={() => <Activities />}
         />
        <Route
          exact
          path='/build-itinerary'
          component={() => <ItineraryBuilder />}
        />
        <Route
          exact
          path='/saved-itineraries'
          component={() => <SavedItineraries />}
        />
        <Route
          exact
          path='/single-itinerary'
          component={() => <SingleItinerary />}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
