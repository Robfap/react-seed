import comp1Reducer from 'component1/reducers/reducer';
import * as actionTypes from 'component1/constants/actionTypes';

var store;
var defaultStore = {
    counter: 0
};

describe('Comp1 reducer', () => {

    it('should check something', () => {
       expect(true).toEqual(true);
    });

    it ('should return default store', () => {
        // When
        store = comp1Reducer(store, {});

        // Then
        expect(store).toEqual(defaultStore);
    });

    it ('should increase counter', () => {
       const action = {
           type: actionTypes.TYPE_1
       };

       const newStore = comp1Reducer(store, action);

        expect(newStore.counter).toEqual(1);

    });

});