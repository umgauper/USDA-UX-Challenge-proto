import React, { PropTypes, Component } from 'react';
import {HOC} from 'formsy-react';

class ChildNamesInputs extends Component {
  render() {
    const errorMessage = this.props.getErrorMessage();
    var that = this;

    var inputs = this.props.UserInputFunctions.map(function (func) {
      var func0 = function(event) {
        that.props.setValue(event.target.value);
        func[0](event);
      };

      var func1 = function(event) {
        that.props.setValue(event.target.value);
        func[1](event);
      };

      var func2 = function(event) {
        that.props.setValue(event.target.value);
        func[2](event);
      };

      return <div>
               <input name={that.props.name}
                      onChange={func0}
                      className="first"/>
               <input name={that.props.name}
                      onChange={func1}
                      className="middle"/>
               <input name={that.props.name}
                      onChange={func2}
                      className="last"/>
             </div>
    });
    return <div>
            <h3>List the first name, middle initial, and last name of each child in your household.</h3>
             {inputs}
            <button onClick={this.props.handleNextClick}>Next</button>
            <span
              className="validation-error">{errorMessage}
            </span>
          </div>
  }
}

export default HOC(ChildNamesInputs);

//TODO: add validation to these inputs. Must be alpha should m.i. allow .? and parse them out?)
//and must be non-empty before Next clicked is allowed! (validate notEmpty??)
//Edge cases: names with dashes? like Oliver-Bookholtz?? Add - to allowed things
// also Jr. etc.
