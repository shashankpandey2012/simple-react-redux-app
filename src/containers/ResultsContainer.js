/**
 * Created by Shashank on 7/29/2017.
 */
import React , { Component } from 'react';
import Results from '../components/Results';
import { connect } from 'react-redux';
import {ActionTypes} from '../constants';


class ResultsContainer extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount (){
        console.log('RESULT CONTAINER WILL MOUNT');
    }

    componentDidMount () {
        console.log('Component Did Mount');
        console.log(this.props.users);
        this.props.fetchScores(this.props.users);

    }


    render () {
        return (
            <Results scoreFetchRequested={this.props.scoreFetchRequested}
                     playersInfo = {this.props.users}
                     scores={this.props.scores}
                     scoreFetched = {this.props.scoreFetched}/>
        )
    }
}

const mapStateToProps = state => ({
    errorMessage: state.user.errorMessage,
    scoreFetchRequested: state.user.scoreFetchRequested,
    scoreFetched: state.user.scoreFetched,
    scoreFetchFailed: state.user.scoreFetchFailed,
    scores: state.user.scores,
    users: state.user.users
});

const mapDispatchToProps = dispatch => ({
    fetchScores: (players) => {
        dispatch({ type: ActionTypes.FETCH_SCORE_REQUESTED , payload: players})
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer)