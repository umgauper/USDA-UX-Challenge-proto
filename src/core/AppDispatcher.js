/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { Dispatcher } from 'flux';

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });

};

export default AppDispatcher;
