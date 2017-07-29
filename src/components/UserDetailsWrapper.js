/**
 * Created by Shashank on 7/29/2017.
 */
import React , { PropTypes } from 'react';

function UserDetailsWrapper(props) {
    return (
        <div className="col-sm-6">
            <b> <p className="lead">{props.header}</p></b>
            {props.children}
        </div>
    )
}

export default UserDetailsWrapper;
