import React from 'react';

const Option = (props) => {
  return (
    <div>
      <li key={props.id}>{props.title}
        <button onClick={(e) => {
          props.handleRemoveOption(props.title);
        }}>
          remove
        </button>
      </li>
    </div>
  )
};

export default Option
