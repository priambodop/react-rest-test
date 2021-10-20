import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import { 
      Login,
      Dashboard,
      InputItem,
      ConfirmItem,
      ResultItem, 
    } from '../pages';

class Containers extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" children={<Login />} />
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/inputItem">
                        <InputItem />
                    </Route>
                    <Route path="/confirmItem">
                        <ConfirmItem />
                    </Route>
                    <Route path="/ResultItem">
                        <ResultItem />
                    </Route>
                    </Switch>
            </Router>
        );
    }
}

export default Containers;