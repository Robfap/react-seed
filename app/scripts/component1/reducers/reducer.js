import * as actionTypes from '../constants/actionTypes';
import _ from 'lodash';

const initialState = {
    counter: 0
};

let Reducer = {};

Reducer[actionTypes.TYPE_1] = function (store) {
    const newStore = _.cloneDeep(store);
    newStore.counter++;

    return newStore;
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
