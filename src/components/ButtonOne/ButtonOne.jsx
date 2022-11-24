import './buttonOne.css';

export default function ButtonOne() {
  return (
    <button
      className='btn1'
      onClick={(e) => {
        const buttonFontandBcg = e.target;
        console.log(buttonFontandBcg);
        buttonFontandBcg.style.backgroundColor = 'red';
        buttonFontandBcg.style.fontSize = 'large';
      }}
    >
      Button1
    </button>
  );

  /*
Create three button components (give them minimal style with CSS)
- ButtonOne, after click changes his font color and background color (it should have some style, but the one that is applied should be opposite);
*/
}
