import React, { PropTypes, Component } from 'react';
import {HOC} from 'formsy-react';
import FirstNameInput from '../FirstNameInput';


class ChildNamesInputs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var num = this.props.numberOfChildren;
    var inputsArray = [];
    while(num > 0) {
      inputsArray.push(
        <FirstNameInput
          name={'firstName' + num}
          key={'firstName' + num}
          validations="isAlpha"
          validationError="Please enter a valid name"
          ref={'firstName' + num}
          />
      );
      num--;
    }

    var childObject = {
      "firstName": this.refs.firstName0
    };

    var saveData = this.props.saveData(childObject);



    return <div>
              {inputsArray}
           <button onClick={saveData}>Next</button>
           </div>
  }
}

export default HOC(ChildNamesInputs);

