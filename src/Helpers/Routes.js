import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../App/Views/Home';
import Activities from '../App/Views/Activities';
import ItineraryBuilder from '../App/Views/ItineraryBuilder';
import SavedItineraries from '../App/Views/SavedItineraries';
import SingleItinerary from '../App/Views/SingleItinerary';
import NotFound from '../App/Views/NotFound';

export default function Routes({ user }) {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home user={user}/>}
        />
        <PrivateRoute
          exact
          path='/activities'
          component={Activities}
          user={user}
         />
        <PrivateRoute
          exact
          path='/build-itinerary'
          component={ItineraryBuilder}
          user={user}
        />
        <PrivateRoute
          exact
          path='/single-itinerary:id'
          component={ItineraryBuilder}
          user={user}
        />
        <PrivateRoute
          exact
          path='/saved-itineraries'
          component={SavedItineraries}
          user={user}
        />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (componentInfo) => (user ? (
      <Component {...componentInfo} user={user} />
  ) : (
      <Redirect to={{ pathname: '/', state: { from: componentInfo.location } }} />
  ));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
