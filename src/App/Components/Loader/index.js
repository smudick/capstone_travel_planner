import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

export default class Loader extends Component {
  render() {
    return (
      <>
        <Spinner style={{ width: '2rem', height: '2rem' }} type='grow' className='loader-progress'/>
        <Spinner style={{ width: '2rem', height: '2rem' }} type='grow' className='loader-custom-dark'/>
        <Spinner style={{ width: '2rem', height: '2rem' }} type='grow' className='loader-saved-dark'/>
      </>
    );
  }
}
