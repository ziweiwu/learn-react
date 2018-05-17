import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'

//render the IndecisionApp component which wraps all other components
ReactDOM.render(<IndecisionApp options={['props1', 'props2']}/>, document.getElementById('app'));
