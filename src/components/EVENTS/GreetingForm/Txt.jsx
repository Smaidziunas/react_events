export default function Txt(props) {
  return (
    <div
      className={`txtDiv ${props.cl}`}
      // id={props.cl}
      // style={{ display: props.cl }}
    >
      <h2>
        Hello, {props.name} {props.surname}!
      </h2>
    </div>
  );
}
