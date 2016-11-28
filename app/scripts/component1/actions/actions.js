import * as actionTypes from '../constants/actionTypes';

export function action1 () {
    return {
        type: actionTypes.TYPE_1
    }
}

export function action2 (menuFields) {
    return {
        type: actionTypes.TYPE_2,
        menuFields
    }
}