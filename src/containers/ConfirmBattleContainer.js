/**
 * Created by Shashank on 7/29/2017.
 */
import React , { PropTypes , Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import ConfirmBattle from '../components/ConfirmBattle';
import { ActionTypes, APP_PREFIX } from '../constants';

class ConfirmBattleContainer extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount () {
        console.log('ComponentWillMount');
        let query = this.props.location.query;
        this.props.loadUsers([query.user1,query.user2]);

    }

    componentDidMount () {

    }


    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }

    handleInitiateBattle() {
        // console.log(this.props.users);
        console.log('HANDLE INITIATE BATTLE CALLED');
        browserHistory.push({
            pathname: '/results'
        })
    }

    render() {
        // console.log(this.props.userFetched);
        // console.log(this.props.users);
        return (
            <ConfirmBattle
                userFetchRequested={this.props.userFetchRequested}
                userFetched={this.props.userFetched}
                scoreFetched={this.props.scoreFetched}
                onInitiateBattle={this.handleInitiateBattle.bind(this)}
                users={this.props.users}/>
        )
    }
}

ConfirmBattleContainer.contextTypes = {
    router:  PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.user.users,
    userFetchRequested: state.user.fetchRequested,
    userFetched: state.user.fetched,
    userFetchFailed: state.user.fetchFailed,
    errorMessage: state.user.errorMessage,
    scoreFetchRequested: state.user.scoreFetchRequested,
    scoreFetched: state.user.scoreFetched,
    scoreFetchFailed: state.user.scoreFetchFailed,
    scores: state.user.scores
});






const mapDispatchToProps = dispatch => ({
    loadUsers: (users) => {
        dispatch({ type: ActionTypes.FETCH_USER_REQUESTED , payload: users})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBattleContainer)
