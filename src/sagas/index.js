/**
 * Created by Shashank on 7/29/2017.
 */
import { fork } from 'redux-saga/effects';

import userSaga from './user';

function* rootSaga() {
    yield [
        fork(userSaga)
    ];
}

export default rootSaga;