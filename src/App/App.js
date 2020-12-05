import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Styles/App.scss';
import Routes from '../Helpers/Routes';
import MyNavbar from './Components/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <Router>
        <MyNavbar/>
        <Routes/>
      </Router>
    </div>
    );
  }
}

export default App;
