import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/PrimeiraPagina'
import Segunda from './pages/SegundaPagina'
import Hooks from './pages/Hooks'

const Routes =() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/SegundaPagina" component={Segunda} />
            <Route exact path="/hooks" component={Hooks} />
        </Switch>
    </BrowserRouter>
)

export default Routes;