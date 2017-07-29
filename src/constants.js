/**
 * Created by Shashank on 7/29/2017.
 */
import keyMirror from 'keymirror';

export const APP_PREFIX = "";

export const ActionTypes = keyMirror({

    //USER action types
    CLEAR_USER_DATA: null,
    FETCH_USER_FAILED: null,
    FETCH_USER_REQUESTED: null,
    FETCH_USER_SUCCESS: null,

    FETCH_SCORE_FAILED: null,
    FETCH_SCORE_REQUESTED:null,
    FETCH_SCORE_SUCESS:null

});