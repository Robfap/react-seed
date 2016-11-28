import * as actionTypes from '../constants/actionTypes';

const initialState = {};

let Reducer = {};

Reducer[actionTypes.TYPE_1] = function () {
};

Reducer[actionTypes.TYPE_2] = () => {
};

export default function(store = initialState, action) {
    const reducerFunction = Reducer[action.type];
    if (reducerFunction) {
        return reducerFunction.call(Reducer, store, action);
    }

    return store;
}
