import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/main';
import Product from '../src/pages/products';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/products/:id' component={Product}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;