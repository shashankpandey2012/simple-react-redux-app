/**
 * Created by Shashank on 7/29/2017.
 */
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import UserAPI from '../api/config'
import { ActionTypes } from '../constants'
import { toString, isString, isEqual } from 'lodash/lang'
import { merge } from 'lodash/object';


function* fetchUserSaga(action) {

    console.log('PAYLOAD');
    console.log(action.payload);
    let data = [];
    let errors = [];
    {
        const {response , error} = yield  call(UserAPI.getUserInfo, action.payload[0]);
        // console.log(response);
        if(!error && response){
            // console.log(response.data);
            data.push(response.data);
        }
    }
    {
        const {response , error} = yield  call(UserAPI.getUserInfo, action.payload[1]);
        // console.log(response);
        // console.log(error);
        if(!error && response){
            // console.log(response.data);
            data.push(response.data);
        }
    }
    // const data  = yield call(UserAPI.getAllUsers(action.payload));
    // console.log(data);
    if ( data.length === 2 ) {
        yield put({type: ActionTypes.FETCH_USER_SUCCESS, payload: {users: data}});
    }

    else {
        yield put({
            type: ActionTypes.FETCH_USER_FAILED,
            payload: {
                message: "Couldn't load user profiles"
            }
        })
    }
}

function* fetchScoreSaga(action){
    const scores = yield call(UserAPI.battle , action.payload);
    if(scores){
        yield put({type: ActionTypes.FETCH_SCORE_SUCESS, payload: {scores: scores , users: action.payload}});

    }
    else{
        yield put({
            type: ActionTypes.FETCH_SCORE_FAILED,
            payload: {
                message: "Could'nt Load the scores"
            }
        })
    }
}


function* userSaga() {
    yield [
        takeLatest(ActionTypes.FETCH_USER_REQUESTED, fetchUserSaga),
        takeLatest(ActionTypes.FETCH_SCORE_REQUESTED , fetchScoreSaga)
    ]
}

export default userSaga