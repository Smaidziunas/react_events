/*
TASK Two
Create a form (GreetingForm component with minimal style) which has fields for name and surname. After form fields are filled and submit button click, form below must display greeting like “Hello, John Smith”
*/
import { useState } from 'react';

import Txt from './Txt';

export default function GreetingForm() {
  const [inputName, setinputName] = useState('');
  const [inputLastName, setinputLastName] = useState('');

  const [showGreeting, setshowGreeting] = useState('');
  const [textName, settextName] = useState('');
  const [textLstName, settextLstName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();

    setinputName('');
    setinputLastName('');

    setshowGreeting('show');
    settextName(inputName);
    settextLstName(inputLastName);

    console.log('submit ivyko');
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input
          name='username'
          type='text'
          id='name'
          onChange={(event) => setinputName(event.target.value)}
          value={inputName}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          name='lastname'
          type='text'
          id='surname'
          onChange={(event) => setinputLastName(event.target.value)}
          value={inputLastName}
        />
      </div>
      <div>
        <button type='submit'>Submit form</button>
      </div>
      <Txt cl={showGreeting} name={textName} surname={textLstName} />
    </form>
  );
}
