import './styles.css';

function Peca(props) {
  return (
    <div id="peca-body" className={props.className}>
      <h1>{props.number}</h1>
    </div>
  );
}

export default Peca;