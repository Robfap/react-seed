import * as actionTypes from '../constants/actionTypes';

const initialState = {
    counter: 0
};

let Reducer = {};

Reducer[actionTypes.TYPE_1] = function (store) {
    return Object.assign({}, store, {counter: store.counter + 1});
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
