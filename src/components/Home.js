/**
 * Created by Shashank on 7/29/2017.
 */
import React,{ Component } from 'react';
import { Link } from 'react-router';
import styles from '../styles';
import IdleTimer from 'react-idle-timer';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
          userLoggedIn:true
        };
        this._onActive = this._onActive.bind(this);
        this._onIdle = this._onIdle.bind(this);
    }

    _onActive(){
        console.log('On Active Called');
        this.setState({
            userLoggedIn:true
        })
    }

    _onIdle(){
        console.log('On Idle Called');
        this.setState({
            userLoggedIn:false
        })
    }


    render(){

        return (
            <IdleTimer
                ref="idleTimer"
                element={document}
                activeAction={this._onActive}
                idleAction={this._onIdle}
                timeout={1000*60*1}
                format="MM-DD-YYYY HH:MM:ss.SSS">
                <div>
                {this.state.userLoggedIn &&
                    <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
                        <h1>Github Battle</h1>
                        <p className="lead">Some motto</p>
                        <Link to="/players">
                            <button type="button" className="btn btn-lg btn-success"> Get Started</button>
                        </Link>
                    </div>
                }
                {!this.state.userLoggedIn &&
                <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
                    <h1>Sorry You Logged Out.Please Refresh to Login Again</h1>
                </div>
                }
                </div>
            </IdleTimer>
        );
    }

}

export default Home;