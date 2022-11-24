export default function ButtonTwo() {
  let arr = 0;

  return (
    <button
      className='btn2'
      onClick={(e) => {
        e.preventDefault();
        arr += 1;
        e.target.textContent = `Clicked: ${arr} times`;
        // let buttonTwoTxt = e.target.textContent;
        // console.log((buttonTwoTxt = 'new'));
      }}
    >
      Button2
    </button>
  );

  /*
- ButtonTwo, after click displays amount of click he has (inside button like “Clicked: 1”);
*/
}
