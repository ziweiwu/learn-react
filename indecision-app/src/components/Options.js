import React from 'react';
import Option from './Option'

const Options = (props) => {
  const options = props.options.map((option) =>
    <Option title={option} key={option} handleRemoveOption={props.handleRemoveOption}/>);
  return (
    <div>
      {props.options.length===0 &&
      <p>Please add some options to get started</p>
      }
      <button
        onClick={props.handleRemoveOptions}
        disabled={!props.hasOptions}
      >
        Remove all
      </button>
      <ul>
        {options}
      </ul>
    </div>
  )
};

export default Options
