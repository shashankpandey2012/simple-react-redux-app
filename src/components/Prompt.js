/**
 * Created by Shashank on 7/29/2017.
 */
import React , { PropTypes } from 'react';
import styles from '../styles/index';

function Prompt(props) {
    return (
        <div className="jumbotron col-sm6 col-sm-offset-1 text-center" style={styles.TransparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form_control"
                            placeholder="Github Username"
                            value={props.username}
                            type="text"/>
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

Prompt.propTypes = {
    header:PropTypes.string.isRequired,
    onSubmitUser:PropTypes.func.isRequired,
    username:PropTypes.string.isRequired,
    users: PropTypes.array,
    userFetched: PropTypes.bool,
    userFetchFailed: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default Prompt;