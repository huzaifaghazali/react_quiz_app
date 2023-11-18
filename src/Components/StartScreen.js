import React from 'react';

export default function StartScreen({ numbQuestion }) {
  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numbQuestion} question to test your React mastery</h3>
      <button className='btn btn-ui'>Let's start</button>
    </div>
  );
}
