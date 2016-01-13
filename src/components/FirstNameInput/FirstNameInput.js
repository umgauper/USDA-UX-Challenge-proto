import React, { PropTypes, Component } from 'react';
import {HOC} from 'formsy-react';

class FirstNameInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var that = this;

    var handleInput = function(event) {
      that.props.setValue(event.target.value);

      var childObject = {
        "firstName": event.target.value
      };

      that.props.saveData(childObject);

    };

    var errorMessage = this.props.getErrorMessage();

    return <div>
              <input
                type="text"
                name={this.props.name}
                value={this.props.getValue()}
                onChange={handleInput}
                ref={this.props.ref}
              />
             <span>{errorMessage}</span>
          </div>
  }
}

export default HOC(FirstNameInput);

