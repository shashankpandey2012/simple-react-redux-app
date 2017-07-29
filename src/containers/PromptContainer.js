/**
 * Created by Shashank on 7/29/2017.
 */
import React, { Component, PropTypes } from 'react'
import styles from '../styles/index';
import { connect } from 'react-redux'
import { isEqual } from 'lodash/lang';
import { filter, map } from 'lodash/collection';
import { ActionTypes, APP_PREFIX } from '../constants';
import { browserHistory } from 'react-router';


class PromptContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            username1: '',
            username2: '',
            error: ''
        };
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }



    handleSubmitUser (e) {
        e.preventDefault();
        let username1 = this.state.username1;
        let username2 = this.state.username2;
        if(username1.trim() === '' || username2.trim() === ''){
            this.setState({
                username1: '',
                username2: '',
                error: 'Kindly Enter Valid UserNames'
            });
        }
        else{
            this.setState({
                username1: '',
                username2: '',
                error: ''
            });
            browserHistory.push(`${APP_PREFIX}/confirmBattle?user1=${username1.toLowerCase()}&user2=${username2.toLowerCase()}`);
        }

    }

    handleUpdateUser(event) {

        if(event.target.name === 'username1'){
            this.setState({
                username1 : event.target.value
            })
        }
        if(event.target.name === 'username2'){
            this.setState({
                username2 : event.target.value
            })
        }
    }

    render () {
        return (
            <div className="jumbotron col-sm6 col-sm-offset-1 text-center" style={styles.TransparentBg}>
                <h1>Select Players</h1>
                <div className="col-sm-12">
                    <form onSubmit={this.handleSubmitUser}>
                        <div className="form-group">
                            <b><h4>Enter Player One : </h4></b>
                            <input
                                className="form_control"
                                placeholder="Github Username Player 1"
                                onChange={this.handleUpdateUser}
                                name="username1"
                                value={this.props.username1}
                                type="text"/>
                            <br/>
                            <b><h4>Enter Player Two : </h4></b>
                            <input
                                className="form_control"
                                placeholder="Github Username Player 2"
                                onChange={this.handleUpdateUser}
                                name="username2"
                                value={this.props.username2}
                                type="text"/>
                        </div>
                        <div className="form-group col-sm-4 col-sm-offset-4">
                            <button
                                className="btn btn-block btn-success"
                                type="submit">
                                Continue
                            </button>
                            {this.state.error !== '' && <h3>{this.state.error}</h3>}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    users: state.user.users,
    userFetchRequested: state.user.fetchRequested,
    userFetched: state.user.fetched,
    userFetchFailed: state.user.fetchFailed,
    errorMessage: state.user.errorMessage,
});




export default connect(mapStateToProps, null)(PromptContainer)

