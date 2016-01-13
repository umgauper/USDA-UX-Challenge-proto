import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js';
import {HOC} from 'formsy-react';
import FormActions from '../../actions/FormActions.js'

//@withStyles(styles)
class NumberOfChildren extends Component {
  constructor(props) {
    super(props);
  }

  saveInput() {
    var key = 'numberOfChildren';
    var value = this.props.getValue();
    console.log('saveInput triggered');
    FormActions.saveFormData(key, value);
    FormActions.increaseSubsection();//('ChildNamesInput'); //TODO: change parent component to render child based on switch statement
  }

  render() {
    var self = this;

    var handleInput = function(event) {
      self.props.handleUserInputNumber(event);
      self.props.setValue(event.target.value);
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
              maxLength="2"/>
             <button
               onClick={this.saveInput.bind(this)}
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

