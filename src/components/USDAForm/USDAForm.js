import React, { PropTypes, Component } from 'react';
import styles from './Form.scss';
import withStyles from '../../decorators/withStyles.js';
import Section1 from '../Section1';
import Formsy, {Form} from 'formsy-react';

//@withStyles(styles);
class USDAForm extends Component {

  render() {
    return (
      <Formsy.Form>
        <Section1/>
      </Formsy.Form>
    );
   }
}

export default USDAForm
