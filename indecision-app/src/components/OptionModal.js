import React from 'react'
import Modal from 'react-modal'

const OptionalModal = (props) => {
  return (
    <Modal isOpen={props.chosenOption !== undefined}
           onRequestClose={props.handleClearSelectedOption}
           contentLabel="Selected Option"
    >
      {props.chosenOption && <h3>{props.chosenOption}</h3>}
      <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
  )
};

export default OptionalModal
