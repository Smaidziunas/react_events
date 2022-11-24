/*
TASK Two
Create a form (GreetingForm component with minimal style) which has fields for name and surname. After form fields are filled and submit button click, form below must display greeting like “Hello, John Smith”
*/

import Txt from './Txt';

export default function GreetingForm() {
  let arr = {};
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(e.target.surname.value);

          const name = e.target.name.value;
          const surname = e.target.surname.value;

          let arr = {};
          arr.name = e.target.name.value;
          arr.surname = e.target.surname.value;
          // console.log(arr);

          return (
            <Txt
              name={document.getElementById('name').value}
              surname={document.getElementById('surname').value}
            />
          );
        }}
      >
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </div>
        <div>
          <label htmlFor='surname'>Last Name</label>
          <input type='text' id='surname' />
        </div>
        <div>
          <input type='submit' />
          {/* <input type='reset' /> */}
        </div>
      </form>
    </>
  );
}
