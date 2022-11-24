export default function Button() {
  return (
    <button
      onClick={(e) => {
        const buttonThatWasClicked = e.target;
        buttonThatWasClicked.style.backgroundColor = 'red';
      }}
    >
      Click me
    </button>
  );

  // EXAMPLE HOW TO CALL FUNCTION <<WITHOUT>> ARGUMENTS, IN EVENT
  // function showAlert(name) {
  //   alert('clicked');
  // }
  // return <button onClick={showAlert}>Click me</button>;
  // EXAMPLE HOW TO CALL FUNCTION WITH ARGUMENTS IN EVENT
  //   function showAlert(name) {
  //     alert('"clicked by " + name');
  //   }
  //   return (
  //     <button
  //       onClick={() => {
  //         showAlert('John');
  //       }}
  //     >
  //       Click me
  //     </button>
  //   );
}
