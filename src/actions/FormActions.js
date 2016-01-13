import AppDispatcher from '../core/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

var FormActions = {
  saveFormData(key, value) {
    AppDispatcher.handleAction({
      actionType: ActionTypes.SAVE_FORM_DATA,
      data: [key, value]
    });
  },
  increaseSubsection() {
    AppDispatcher.handleAction({
      actionType: ActionTypes.INCREASE_SUBSECTION,
      data: null
    })
  }
};

export default FormActions;
