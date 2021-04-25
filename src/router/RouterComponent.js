import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import LoginComponent from "../components/LoginComponent";
import Archivo from "../components/Archivo";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const RouterComponent = props => {

    const selector = useSelector(selector => selector.auth.conectado);
    console.log(selector)

    return (
        <Router>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute
                            exact
                            path="/"
                            component={ LoginComponent }
                            isAuthenticated={ selector }
                        />
                        <PrivateRoute
                            path="/archivo"
                            component={ Archivo }
                            isAuthenticated={ selector }
                        />
                    </Switch>
                </div>
            </Router>
        </Router>
    );
};

export default RouterComponent;
