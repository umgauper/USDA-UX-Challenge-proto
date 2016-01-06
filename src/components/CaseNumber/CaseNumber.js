import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js';
import {HOC} from 'formsy-react';

class CaseNumber extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
              <h3> Please enter the case number of the assistance program </h3>
              <input type="text" />
              <button onClick={this.props.handleNextClick}>Next</button>
            </div>
  }
}

export default CaseNumber;

