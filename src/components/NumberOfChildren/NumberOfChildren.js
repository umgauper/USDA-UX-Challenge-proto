import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js';
import {HOC} from 'formsy-react';

//@withStyles(styles)
class NumberOfChildren extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var handleClick = this.props.handleNextClick;
    var that = this;

    var handleInput = function(event) {
      that.props.handleUserInputNumber(event);
      that.props.setValue(event.target.value);
    };

    const errorMessage = this.props.getErrorMessage();

    return <div>
            <h3>How many children live in your household?</h3>
            <input
              type="text"
              name={this.props.name}
              value={this.props.getValue()}
              onChange={handleInput}
              className="number"
              maxLength="2"/> //possible that any household has >= 100 children?
             <button
               onClick={handleClick}
               disabled={errorMessage || !this.props.getValue()}>Next
              </button>
            <span
              className="validation-error">{errorMessage}
            </span>
          </div>
  }
}

export default HOC(NumberOfChildren);

//TODO: (maybe) add validation to confirm if someone enters > 9 children?

