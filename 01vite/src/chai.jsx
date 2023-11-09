import React from 'react';

function Chai(props) {
  return (
    <form>
      <input type={props.type} onChange={props.onChange} value={props.value} />
    </form>
  );
}

export default Chai;
