import { combineReducers } from 'redux';
import comp1reducer from '../../component1/reducers/reducer';

const rootReducer = combineReducers({
    comp1: comp1reducer
});

export default rootReducer;