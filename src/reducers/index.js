/**
 * Created by Shashank on 7/29/2017.
 */
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import user from './user';

const rootReducer = combineReducers({
    routing: routerReducer,
    user,
});


export default rootReducer;