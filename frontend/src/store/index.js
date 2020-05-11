import { createStore } from 'redux';

const INITIAL_STATE = {
    showForm: false,
    confirmForm: false,
    formData: {},
}

function form (state = INITIAL_STATE, action){
    switch (action.type) {
        case 'SHOW_FORM':
            return { showForm: state.showForm !== action.showForm ? action.showForm : state.showForm };
        case 'CONFIRM_FORM':
            return { confirmForm: state.confirmForm !== action.confirmForm ? action.confirmForm: state.confirmForm };
        case 'FORM_DATA':
            console.log(action.formData)
            return { formData: state.formData !== action.formData ? action.formData : state.formData};
        default:
            return state;
    }
}

const store = createStore(form);

export default store;