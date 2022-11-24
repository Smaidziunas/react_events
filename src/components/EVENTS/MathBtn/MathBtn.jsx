/**
 * text  - math operator, like -, +, *, /;
 * action - f() that handles logic
 * numbers - array of numbers, like [3,2]
 */

export default function MathBtn({ action, numbers }) {
  return (
    <button
      onClick={(e) => {
        let result;
        switch (action) {
          case '+':
            result = numbers[0] + numbers[1];
            break;
          case '-':
            result = numbers[0] - numbers[1];
            break;
          case '*':
            result = numbers[0] * numbers[1];
            break;
          case '/':
            result = numbers[0] / numbers[1];
          default:
            result = 0;
        }
        e.target.innerText = 'Answer is ' + result;
      }}
    >
      Show {numbers[0]} {action} {numbers[1]} answer
    </button>
  );
}
