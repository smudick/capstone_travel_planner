import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../Helpers/data/connection';
import '../Styles/App.scss';
import Routes from '../Helpers/Routes';
import MyNavbar from './Components/MyNavbar';

fbConnection();

class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className='App'>
      <Router>
        <MyNavbar user={user}/>
        <Routes/>
      </Router>
    </div>
    );
  }
}

export default App;
