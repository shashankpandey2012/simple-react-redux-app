/**
 * Created by Shashank on 7/29/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import PromptContainer from './containers/PromptContainer';
import ConfirmBattleContainer from './containers/ConfirmBattleContainer';
import ResultsContainer from './containers/ResultsContainer';


export default store => (
    <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path='/players' header="Player One" component={PromptContainer}/>
            <Route path='/confirmBattle' component={ConfirmBattleContainer}/>
            <Route path='/results' component={ResultsContainer}/>
    </Route>
)