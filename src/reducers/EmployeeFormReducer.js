import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_EDIT_CLEAR,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_EDIT_CLEAR:
            return INITIAL_STATE;
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            // the [] below is not an array, it is 'key interpolation', 
            // action.payload.prop is evaluated @ runtime as the prop sent it 'name' in this example
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
        return state;
    }
};
