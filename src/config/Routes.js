import React, {Component} from 'react';

import {Route, Switch} from "react-router";
import {BrowserRouter} from 'react-router-dom'
import Dashbord from "../pages/Dashbord";
import Top from "../pages/Top";
import Layout from "../pages/layout/Layout";


const Routes = (props) => ( <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' render={() => (<Dashbord socket={props.socket}/>)}/>
            <Route path='/top-riders' render={() => <Top socket={props.socket}/>}/>
        </Switch>
    </Layout>
</BrowserRouter>);

export default Routes;