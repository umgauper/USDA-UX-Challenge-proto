import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js';

//@withStyles(styles)
class NumberOfChildren extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    var handleClick = this.props.handleNextClick;
    var handleInput = this.props.handleUserInputNumber;

    return <div>
            <h3>How many children live in your household?</h3>
            <input
              type="text"
              onChange={handleInput}
              className="number"/>
             <button
                onClick={handleClick}>Next
              </button>
          </div>
  }
}

export default NumberOfChildren
