import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js';
import {HOC} from 'formsy-react';

class AssistanceProgramQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return <div>
            <h3>Do any household members (including you) currently participate in one or more of the following programs: SNAP, TANF, or FDPIR?</h3>
            <button onClick={this.props.handleYesClick} className="yes">Yes</button>
            <button onClick={this.props.handleNoClick} className="no">No</button>
          </div>
  }
}

export default AssistanceProgramQuestion;



