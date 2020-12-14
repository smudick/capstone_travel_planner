import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import getUid from '../../../Helpers/data/authData';
import activitiesData from '../../../Helpers/data/activitiesData';
import joinTableData from '../../../Helpers/data/joinTableData';

export default class ActivityForm extends Component {
  state = {
    firebaseKey: this.props.activity?.firebaseKey || '',
    name: this.props.activity?.name || '',
    image_url: this.props.activity?.image_url || '',
    userId: this.props.activity?.userId || '',
    address: this.props.activity?.address || '',
    city: this.props.city || this.props.activity.city,
    success: false,
  };

  componentDidMount() {
    const userId = getUid();
    this.setState({
      userId,
    });
  }

  handleChange = (e) => {
    if (e.target.name === 'filename') {
      this.setState({ image_url: '' });
      const storageRef = firebase.storage().ref();
      const imageRef = storageRef.child(
        `travel-planner/${this.state.userId}/${Date.now()}${
          e.target.files[0].name
        }`,
      );
      imageRef.put(e.target.files[0]).then((snapshot) => {
        // eslint-disable-next-line camelcase
        snapshot.ref.getDownloadURL().then((image_url) => {
          this.setState({ image_url });
        });
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.firebaseKey === '') {
      activitiesData.saveSearchResults(this.state).then(() => {
        this.props.onUpdate();
        this.setState({
          success: true,
        });
      });
    } else {
      activitiesData.editActivity(this.state).then(() => {
        this.props.onUpdate();
        this.setState({
          success: true,
        });
        joinTableData
          .getScheduledActivitiesByActivityId(this.state.firebaseKey)
          .then((response) => {
            if (response !== {}) {
              response.forEach((res) => {
                const obj = {
                  firebaseKey: res.firebaseKey,
                  name: this.state.name,
                };
                joinTableData.editScheduledActivity(obj);
              });
            }
          });
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.success === true ? (
          <div className='alert alert-success' role='alert'>
            Success!
          </div>
        ) : (
          <div></div>
        )}
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Activity Name'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='text'
          name='address'
          value={this.state.address}
          onChange={this.handleChange}
          placeholder='Address'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='url'
          name='image_url'
          value={this.state.image_url}
          onChange={this.handleChange}
          placeholder='Enter an image URL or upload a file'
          className='form-control form-control-lg m-1'
        />
        <input
          className='m-2'
          type='file'
          id='myFile'
          name='filename'
          accept='image/*'
          onChange={this.handleChange}
        />
        <button className='btn btn-success'>Submit</button>
      </form>
    );
  }
}
