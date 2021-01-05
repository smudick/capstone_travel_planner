import React from 'react';

export default function NotFound() {
  return (
    <div>
      <h1 className='lost'>Not all who wander are lost...</h1>
      <h2 className='lost-sub'>However, in this case, you are indeed lost</h2>
      <a href='/'><button className='btn progress-btn'>Head Back Home</button></a>
    </div>
  );
}
