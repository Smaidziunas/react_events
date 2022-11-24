// import 'src/components/ButtonOne/buttonOne.css';

import Button from './components/Button/Button';
import Form from './components/Form/Form';
import ButtonOne from './components/ButtonOne/ButtonOne';
import ButtonTwo from './components/ButtonTwo/ButtonTwo';
import ButtonThree from './components/ButtonThree/ButtonThree';
import GreetingForm from './components/GreetingForm/GreetingForm';

// =====================

function App() {
  return (
    <div className='App'>
      <h2>Mouse Events</h2>
      {/** Mouse evetns: click, contextMenu (DESINYS KLAV), mouseenter (UZEINAM SU PELE), mouseleave (NUEINAM), mousemove (JUDINAM PER) */}
      <Button />

      <h2>Form events</h2>
      {/** Form Events: submit, reset */}
      <hr />

      <h2>Task One and Two</h2>
      <ButtonOne />
      <ButtonTwo />
      <ButtonThree />

      <hr />

      <Form />

      <hr />

      <GreetingForm />
    </div>
  );
}

export default App;
