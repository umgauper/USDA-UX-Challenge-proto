import React, { PropTypes, Component } from 'react';

class ChildNamesInputs extends Component {
  render() {
    var inputs = this.props.UserInputFunctions.map(function (func) {
      return <div><input onChange={func[0]} className="first"/>
        <input onChange={func[1]} className="middle"/>
        <input onChange={func[2]} className="last"/></div>
    });
    return <div>
            <h3>List the first name, middle initial, and last name of each child in your household.</h3>
             {inputs}
            <button onClick={this.props.handleNextClick}>Next</button>
          </div>
  }
}

export default ChildNamesInputs
