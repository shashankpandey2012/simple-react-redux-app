/**
 * Created by Shashank on 7/29/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import styles from '../styles';

function Home(props){
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.TransparentBg}>
            <h1>Github Battle</h1>
            <p className="lead">Some motto</p>
            <Link to="/players">
                <button type="button" className="btn btn-lg btn-success"> Get Started</button>
            </Link>
        </div>
    )
}

export default Home;