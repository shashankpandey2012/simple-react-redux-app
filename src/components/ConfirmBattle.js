/**
 * Created by Shashank on 7/29/2017.
 */
import React , { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from '../styles/index';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';


function ConfirmBattle(props) {
    return props.userFetched === false && props.users.length < 2
        ? <p>LOADING!</p>
        : <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
            <h1>Confirm Battle</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Player One">
                    <UserDetails info = {props.users[0]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Player Two">
                    <UserDetails info = {props.users[1]}/>
                </UserDetailsWrapper>
            </div>
            <div className="col-sm-8 col-sm-offset-2">
                <div className="col-sm-12" style={styles.space}>
                    <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                        Initiate Battle
                    </button>
                </div>

                <div className="col-sm-12" style={styles.space}>
                    <Link to='/players'>
                        <button type="button" className="btn btn-lg btn-danger">
                            Reselect Players
                        </button>
                    </Link>
                </div>
            </div>
        </div>

}

ConfirmBattle.prototypes = {
    onInitiateBattle: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    userFetchRequested: PropTypes.bool.isRequired,
    userFetched: PropTypes.bool.isRequired,
    userFetchFailed: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    scoreFetchRequested: PropTypes.bool.isRequired,
    scoreFetched: PropTypes.bool.isRequired,
    scoreFetchFailed: PropTypes.bool.isRequired,
    scores: PropTypes.array.isRequired,
};

export default ConfirmBattle;