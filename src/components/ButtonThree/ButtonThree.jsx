import './buttonThree.css';

export default function ButtonThree() {
  return (
    <button
      className='btn3'
      onClick={(e) => {
        const btnDisapears = e.target;
        console.log(btnDisapears);
        btnDisapears.style.display = 'none';
      }}
    >
      Button3
    </button>
  );

  /*
- ButtonThree, after click disappears.
*/
}
