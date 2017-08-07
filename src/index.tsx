import * as React from 'react';
import { render } from 'react-dom';

import './styles/annimation.css';
import './styles/normalize.css';
import './styles/typeography.css';
import './styles/main.css';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const router = (
    <Router>
        <div>
            <Route path="/" component={Main}/>
            <Route exact={true} path="/" component={PhotoGrid}/>
            <Route path="/view/:postId" component={Single}/>
        </div>
    </Router>
);

render(router,  document.getElementById('root') );