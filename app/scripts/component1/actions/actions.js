import * as actionTypes from '../constants/actionTypes';

export function action1 (name, value) {
    return {
        type: actionTypes.TYPE_1,
        name,
        value
    }
}

export function action2 (menuFields) {
    return {
        type: actionTypes.TYPE_2,
        menuFields
    }
}