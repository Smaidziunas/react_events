export default function Form() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.surname.value);

        const name = e.target.name.value;
        const surname = e.target.surname.value;
        const age = e.target.age.value;

        console.log(name, surname, age);
      }}
      onReset={() => {
        console.log('form reset');
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
        <label htmlFor='age'>Age</label>
        <input type='text' id='age' />
      </div>

      <div>
        <input type='submit' />
        <input type='reset' />
      </div>
    </form>
  );
}
