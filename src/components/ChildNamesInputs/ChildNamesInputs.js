import React, { PropTypes, Component } from 'react';
import {HOC} from 'formsy-react';

class ChildNamesInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameIsValidOrEmpty: [], //Used custom validation here instead of formsy-react, because each input requires its own validation, formsy only allowed
      allNamesValid: false                  //one validation for all of the ChildNamesInputs component
                        //should these be in Section1 state?? hmm...
                        //TODO: disable Next if any inputs are empty or invalid (except m.i.)
    }
  }

  render() {
    var that = this;
    var num = this.props.UserInputFunctions.length;

    while(num > 0) {
      that.state.nameIsValidOrEmpty.push([true, true, true]);
      num--;
    }

    var getErrorMessage = function(bool) {
      if (bool) {
        return ''
      } else {
        return 'Please enter a valid name'
      }
    };

    var isAllInputsValid = function(arr) { //TODO: this needs to be in the STATE, so button will update... but how?? hmm...
      //check each time input is entered? yeah...
      // return false
      arr.forEach(function(arr) {
        if(arr.indexOf(false) > -1) {
          return false
        }
      });
      return true
    };

    var validateName = function(regexp, inputIndex, nameIndex, value) {
      if ( regexp.test(value) || !value ) {
        that.state.nameIsValidOrEmpty[inputIndex][nameIndex] = true;
      } else {
        that.state.nameIsValidOrEmpty[inputIndex][nameIndex] = false;
      }
    };

    var inputs = this.props.UserInputFunctions.map(function (func, index) {
      var func0 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z\-]+$/, index, 0, event.target.value);
        func[0](event);
        that.state.allNamesValid = isAllInputsValid(that.state.nameIsValidOrEmpty)
      };

      var func1 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z]$/, index, 1, event.target.value);
        func[1](event);
        that.state.allNamesValid = isAllInputsValid(that.state.nameIsValidOrEmpty)
      };

      var func2 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z]+\-*[a-zA-Z]*$/, index, 2, event.target.value);
        func[2](event);
        that.state.allNamesValid = isAllInputsValid(that.state.nameIsValidOrEmpty)
      };

      return <div>
               <input name={that.props.name}
                      onChange={func0}
                      className="first"
                      />
               <span>{getErrorMessage(that.state.nameIsValidOrEmpty[index][0])}
               </span>

               <input name={that.props.name}
                      onChange={func1}
                      className="middle"
                      maxLength="1"
                      type="text"/>
                <span>{getErrorMessage(that.state.nameIsValidOrEmpty[index][1])}
               </span>
               <input name={that.props.name}
                      onChange={func2}
                      className="last"/>
                <span>{getErrorMessage(that.state.nameIsValidOrEmpty[index][2])}
                </span>
             </div>
    });
    return <div>
            <h3>List the first name, middle initial, and last name of each child in your household.</h3>
             {inputs}
            <button onClick={this.props.handleNextClick}
                    disabled={!this.state.allNamesValid}>Next</button>
          </div>
  }
}

export default HOC(ChildNamesInputs);

