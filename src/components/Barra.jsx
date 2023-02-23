import ProgressBar from 'react-bootstrap/ProgressBar';

function ContextualExample(props) {
  return (
    <div>
      <ProgressBar animated variant="success" now={props.now} label={props.now} />
    </div>
  );
}

export default ContextualExample;