import React, { PropTypes, Component } from 'react';
import {HOC} from 'formsy-react';

class ChildNamesInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theFirstName: '',
      errorMessages: [] //Used custom validation here instead of formsy-react, because each input requires its own validation, formsy only allowed
                        //one validation for all of the ChildNamesInputs component
                        //TODO: split each input into separate component? would that be cleaner, or just make it more complex?!
    }
  }

  render() {
    var that = this;
    var num = this.props.UserInputFunctions.length;

    while(num > 0) {
      that.state.errorMessages.push(['', '', '']);
      num--;
    }

    var validateName = function(regexp, inputIndex, nameIndex, value) {
      if ( regexp.test(value) || !value ) {
        that.state.errorMessages[inputIndex][nameIndex] = ''
      } else {
        that.state.errorMessages[inputIndex][nameIndex] = 'Please enter a valid name';
      }
    };

    var inputs = this.props.UserInputFunctions.map(function (func, index) {
      var func0 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z\-]+$/, index, 0, event.target.value);
        func[0](event);
      };

      var func1 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z]$/, index, 1, event.target.value);
        func[1](event);
      };

      var func2 = function(event) {
        that.props.setValue(event.target.value);
        validateName(/^[a-zA-Z]+\-*[a-zA-Z]*$/, index, 2, event.target.value);
        func[2](event);
      };

      return <div>
               <input name={that.props.name}
                      onChange={func0}
                      className="first"
                      />
               <span>{that.state.errorMessages[index][0]}
               </span>

               <input name={that.props.name}
                      onChange={func1}
                      className="middle"
                      maxLength="1"
                      type="text"/>
                <span>{that.state.errorMessages[index][1]}
               </span>
               <input name={that.props.name}
                      onChange={func2}
                      className="last"/>
                <span>{that.state.errorMessages[index][2]}
                </span>
             </div>
    });
    return <div>
            <h3>List the first name, middle initial, and last name of each child in your household.</h3>
             {inputs}
            <button onClick={this.props.handleNextClick}>Next</button>
          </div>
  }
}

export default HOC(ChildNamesInputs);

