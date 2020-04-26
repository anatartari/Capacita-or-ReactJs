import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//SCREENS
import HomePage from './Views/HomePage'
import PageTwo from './Views/Pagina2'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route extract path="/" component={HomePage} />
            <Route extrac path="/paginadois" component={PageTwo} />
        </Switch>
    </BrowserRouter>
)

export default Routes;