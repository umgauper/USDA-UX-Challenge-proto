import AppDispatcher from '../core/AppDispatcher';
import {EventEmitter} from 'events';
import ActionTypes from '../constants/ActionTypes';

var _formData = {
  i: 0
};

function saveFormData(data) {
  var key = data[0];
  _formData[key] = data[1];
}

function increaseSubsection() {
  _formData.i++;
}

var FormStore = Object.assign({}, EventEmitter.prototype, {

  getFormData: function() {
    return _formData;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback)
  },

  removeChangeListener: function(callback) {
    this.removeChangeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case ActionTypes.SAVE_FORM_DATA:
      saveFormData(action.data);
      break;

    case ActionTypes.INCREASE_SUBSECTION:
      console.log('increasing subsection...');
      increaseSubsection();
      break;

    default:
      return true;

    }

  FormStore.emitChange();

  return true;

});

export default FormStore;
