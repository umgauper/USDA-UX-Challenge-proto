import React, { PropTypes, Component } from 'react';
import withStyles from '../../decorators/withStyles.js'
import NumberOfChildren from '../NumberOfChildren'
import ChildNamesInputs from '../ChildNamesInputs'
import ChildQuestions from '../ChildQuestions'

//@withStyles(styles)
Formsy.addValidationRule('isName', function(values, value) {
  return /^[a-z]+\-[a-z]+$|^[a-z]+$/.test(value);
});

class Section1 extends Component {
  constructor(props) {
    super(props); //what is this doing?
    this.state = {
      i: 0,
      j: 0,
      children: []
    };

    this.handleUserInputNumber = function (event) {
      var arr = [];
      var num = event.target.value;
      while (num > 0) {
        arr.push({name: [], isStudent: null, isFoster: null, isMigrantEtc: null});
        num--;
      }
      this.state.children = arr;
      console.log(event);
    };

    this.handleNextClick = function () {
      var i = this.state.i;
      this.setState({i: i + 1});
    };

    this.handleUserInputNames = function(childIndex, nameIndex, event) {
      var name = event.target.value;
      var arr = this.state.children;
      arr[childIndex].name[nameIndex] = name;
      this.setState({children: arr});
    };

    this.handleYesNoClick = function(bool, question, childIndex)
    {
      this.setState({j: this.state.j + 1});
      var arr = this.state.children;
      arr[childIndex][question] = bool;
      this.setState({children: arr});
      console.log(this.state.children);
    };
  }

  render() {
    var IsStudentFunctions = [];
    var IsFosterFunctions = [];
    var IsMigrantFunctions = [];

    this.state.children.forEach(function (el, index) {
      var that = this;

      function MakeObject(question, index) { //rename!!
        var obj = {};
        obj.yes = that.handleYesNoClick.bind(that, true, question, index);
        obj.no = that.handleYesNoClick.bind(that, false, question, index);
        return obj
      }

      IsStudentFunctions.push(MakeObject('isStudent', index));
      IsFosterFunctions.push(MakeObject('isFoster', index));
      IsMigrantFunctions.push(MakeObject('isMigrantEtc', index));
    }, this);

    var UserInputFunctions = this.state.children.map(function (el, index) {
      var arr = [];
      arr[0] = this.handleUserInputNames.bind(this, index, 0);
      arr[1] = this.handleUserInputNames.bind(this, index, 1);
      arr[2] = this.handleUserInputNames.bind(this, index, 2);
      return arr;
    }, this);

    var subsections = [
     <NumberOfChildren
       name="number"
       handleNextClick={this.handleNextClick.bind(this)}
       handleUserInputNumber={this.handleUserInputNumber.bind(this)}
       validations="isNumeric"
       validationError="Please enter a valid number"
     />,
     <ChildNamesInputs
       name="child-names"
       UserInputFunctions={UserInputFunctions}
       handleNextClick={this.handleNextClick.bind(this)}
     />,
     <ChildQuestions
       IsStudentFunctions={IsStudentFunctions}
       IsFosterFunctions={IsFosterFunctions}
       IsMigrantFunctions={IsMigrantFunctions}
       j={this.state.j}
       children={this.state.children}
     />];
    return <div>{subsections[this.state.i]}</div>;
  }
}

export default Section1;
