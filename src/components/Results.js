/**
 * Created by Shashank on 7/29/2017.
 */
import React , { PropTypes } from 'react';
import styles from '../styles/index';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import { Link } from 'react-router';



function Results(props){

    if(props.scores.length < 2){
        return (
            <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
                <h2>Hold On! Loading the Scores</h2>
            </div>
        )
    }
    if(props.scores[0] === props.scores[1] && props.scoreFetched){
        return (
            <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
                <h1>Its a Tie!</h1>
                <div  className="col-sm-12" style={styles.space}>
                    <Link to="/players">
                        <button type="button" className="btn btn-lg btn-danger"> Start Over</button>
                    </Link>
                </div>
            </div>
        )
    }


    let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    let losingIndex = winningIndex === 0 ? 1: 0;
    console.log(props.scores[losingIndex]);

    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score = {props.scores[winningIndex]} info = {props.playersInfo[winningIndex]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Loser">
                    <UserDetails score = {props.scores[losingIndex]} info = {props.playersInfo[losingIndex]}/>
                </UserDetailsWrapper>
            </div>
            <div  className="col-sm-12" style={styles.space}>
                <Link to="/players">
                    <button type="button" className="btn btn-lg btn-danger"> Start Over</button>
                </Link>
            </div>
        </div>


    )
}

Results.PropTypes = {
    scoreFetched: PropTypes.bool.isRequired,
    scoreFetchRequested : PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
};

export default Results;