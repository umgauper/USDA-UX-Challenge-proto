import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js'
import NumberOfChildren from '../NumberOfChildren'
import ChildNamesInputs from '../ChildNamesInputs'
import ChildQuestions from '../ChildQuestions'
import AssistanceProgramQuestion from '../AssistanceProgramQuestion'
import CaseNumber from '../CaseNumber'

//@withStyles(styles)
class Section1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: 0,
      numberOfChildren: null
    };

    this.handleUserInputNumber = function (event) {
      this.state.numberOfChildren = parseInt(event.target.value);
    };

    this.increaseSubsectionIndexBy = function (num) {
      var i = this.state.i;
      this.setState({i: i + num});
    };

    this.formData = {
      childInfo: []
    };

    this.saveData = function (childObject) {
      var that = this;
      var arr = that.formData.childInfo;
      arr.push(childObject);
      console.log(this.formData);
    }
  }

  render() {
    var subsections = [
     <NumberOfChildren
       name="number"
       handleNextClick={this.increaseSubsectionIndexBy.bind(this, 1)}
       handleUserInputNumber={this.handleUserInputNumber.bind(this)}
       validations="isNumeric"
       validationError="Please enter a valid number"
     />,
      <ChildNamesInputs
        name="child-names-inputs"
        numberOfChildren={this.state.numberOfChildren}
        saveData={this.saveData.bind(this)}
      />,
     <AssistanceProgramQuestion
       handleYesClick={this.increaseSubsectionIndexBy.bind(this, 1)}
       handleNoClick={this.increaseSubsectionIndexBy.bind(this, 2)}
     />,
      <CaseNumber
        handleNextClick={this.increaseSubsectionIndexBy.bind(this, 1)}
      />
    ];
    return <div>{subsections[this.props.i]}</div>;
  }
}

export default Section1;
