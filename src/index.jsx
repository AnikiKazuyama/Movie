import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store/configureStore';

import  RootContainer from './containers/index';

import '../src/style/root.css';

let store = configureStore();
const history = createHistory();

const render = (Component) => {
    ReactDom.render(
        <Provider store = { store }>
            <ConnectedRouter history = { history } >
                <Component/>
            </ConnectedRouter>
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
