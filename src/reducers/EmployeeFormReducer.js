import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            // the [] below is not an array, it is 'key interpolation', 
            // the prop is evaluated as the prop sent it 'name' in this example
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
        return state;
    }
};
