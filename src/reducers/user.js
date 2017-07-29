/**
 * Created by Shashank on 7/29/2017.
 */
import update from 'immutability-helper';
import { ActionTypes } from '../constants';


const initialState = {
    errorMessage: "",

    fetchFailed: false,
    fetchRequested: false,
    fetched: false,

    scoreFetched:false,
    scoreFetchRequested:false,
    scoreFetchFailed:false,


    users: [],
    scores:[]
};

export default function userReducer (state = initialState, action) {
    switch(action.type) {

        case ActionTypes.FETCH_USER_FAILED:
            return update(state, {
                $merge: {
                    errorMessage: action.payload.message,
                    fetchFailed: true,
                    fetchRequested: false,
                    fetched: true,


                }
            });

        case ActionTypes.FETCH_USER_REQUESTED:
            return update(state, {
                $merge: {
                    errorMessage: "",
                    fetchFailed: false,
                    fetchRequested: true,
                    fetched: false,
                    users: []
                }
            });

        case ActionTypes.FETCH_USER_SUCCESS:
            return update(state, {
                $merge: {
                    fetchRequested: false,
                    fetched: true,
                    users: action.payload.users,
                    scores:[]
                }
            });

        case ActionTypes.CLEAR_USER_DATA:
            return initialState;


        case ActionTypes.FETCH_SCORE_FAILED:
            return update(state, {
                $merge: {
                    errorMessage: action.payload.message,
                    scoreFetchFailed:true,
                    scoreFetchRequested: false,
                    scoreFetched: false
                }
            });

        case ActionTypes.FETCH_SCORE_REQUESTED:
            return update(state, {
                $merge: {
                    errorMessage: '',
                    scoreFetchFailed:false,
                    scoreFetchRequested: true,
                    scoreFetched: false
                }
            });

        case ActionTypes.FETCH_SCORE_SUCESS:
            return update(state, {
                $merge: {
                    errorMessage: '',
                    scoreFetchFailed:false,
                    scoreFetchRequested: false,
                    scoreFetched: true,
                    users: action.payload.users,
                    scores:action.payload.scores
                }
            });

        default:
            return state;
    }
}