import Button from './components/EVENTS/Button/Button';
import Form from './components/EVENTS/Form/Form';
import ButtonOne from './components/EVENTS/ButtonOne/ButtonOne';
import ButtonTwo from './components/EVENTS/ButtonTwo/ButtonTwo';
import ButtonThree from './components/EVENTS/ButtonThree/ButtonThree';
import GreetingForm from './components/EVENTS/GreetingForm/GreetingForm';
import MathBtn from './components/EVENTS/MathBtn/MathBtn';

import './App.css';

// import Content from './components/LAYOUT/Content/Content';
// import Feature from './components/LAYOUT/Feature/Feature';
// import Header from './components/LAYOUT/Header/Header';
// import SignUp from './components/LAYOUT/SignUp/SignUp';

// =====================

function App() {
  return (
    <div className='App'>
      {/* <h2>Mouse Events</h2> */}
      {/** Mouse evetns: click, contextMenu (DESINYS KLAV), mouseenter (UZEINAM SU PELE), mouseleave (NUEINAM), mousemove (JUDINAM PER) */}
      {/* <Button /> */}

      <h2>Form events</h2>
      {/** Form Events: submit, reset */}
      <hr />
      <hr />
      <GreetingForm />
      <hr />
      {/* 
      <h2>Task One and Two</h2>
      <ButtonOne />
      <ButtonTwo />
      <ButtonThree />
      <hr />

      <Form />
      <hr />
      <MathBtn action={'+'} numbers={[5, 6]} /> */}
    </div>
    // <>
    //   <main className='mainGrid'>
    //     <header>
    //       <Header />
    //     </header>
    //     <Content />
    //     <SignUp />
    //     <div className='smallGrid'>
    //       <Feature classN='ft1' bcg='#F5CF8E' />
    //       <Feature classN='ft2' bcg='#C8C6FA' />
    //       <Feature classN='ft3' bcg='#F09A9D' />
    //       {/* <Feature backgroundColor={'#F5CF8E'} /> */}
    //       {/* <Feature backgroundColor={'#C8C6FA'} />
    //       <Feature backgroundColor={'#F09A9D'} /> */}
    //     </div>
    //   </main>
    //   <footer></footer>
    // </>
  );
}

export default App;
