import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import * as Actions from './actions/actions';
import configureStore from './store/configureStore';

import  RootContainer from './containers/index';

let store = configureStore();

const render = (Component) => {
    ReactDom.render(
        <Provider store = { store }>
            <Router>
                <Component huj = 'sas'/>
            </Router>
        </Provider>, 
        document.getElementById('root')
    );
}

render(RootContainer);


























// let unsubscribe = store.subscribe(() => {})

// // Отправим несколько действий
// store.dispatch(Actions.selectBy('popular'));
// store.dispatch(Actions.fetchData('popular'));
// store.dispatch(Actions.selectBy('upcoming'));
// store.dispatch(Actions.fetchData('upcoming'));

// // Прекратим слушать обновление состояния
// unsubscribe()
