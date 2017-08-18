import * as React from 'react';
import { render } from 'react-dom';

import './styles/annimation.css';
import './styles/normalize.css';
import './styles/typeography.css';
import './styles/main.css';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Store, { history } from './store';
import { ConnectedRouter } from 'react-router-redux';

const router = (
    <Provider store={Store}>
        {/* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={Main} />
                <Route exact={true} path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </div>
        </ConnectedRouter>
    </Provider>
);

render(router, document.getElementById('root'));