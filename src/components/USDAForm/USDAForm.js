import React, { PropTypes, Component } from 'react';
import styles from './Form.scss';
import withStyles from '../../decorators/withStyles.js';
import Section1 from '../Section1';
import Formsy, {Form} from 'formsy-react';
import FormStore from '../../stores/FormStore';

//@withStyles(styles);
class USDAForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      numberOfChildren: null
    };
  }

  getFormState() {
    return FormStore.getFormData();
  }

  _onChange() {
    console.log('change event emitted');
    this.setState(this.getFormState());
  }

  componentDidMount() {
    FormStore.addChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <Formsy.Form>
        <Section1
          i={this.state.i}
        />
      </Formsy.Form>
    );
   }
}

export default USDAForm
