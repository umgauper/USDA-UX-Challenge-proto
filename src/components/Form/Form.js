import React, { PropTypes, Component } from 'react';
import styles from './Form.scss';
import withStyles from '../../decorators/withStyles.js';
import Section1 from '../Section1';

@withStyles(styles)
class Form extends Component {

  render() {
    return (
      <Section1/>
    );
  }
}

export default Form;
