import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/main.component';
import Login from './pages/login.component';

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
    </BrowserRouter>
)


export default Routes;