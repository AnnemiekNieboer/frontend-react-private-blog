import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import BlogOverviewPage from "./pages/BlogOverviewPage";
import BlogpostPage from "./pages/BlogpostPage";
import Navigation from "./components/Navigation";

function PrivateRoute({children, isAuth, ...rest}) {
    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/login"/>}
        </Route>
    )
}

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    console.log(isAuthenticated);
    return (
        <Router>
            <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/login">
                    <LoginPage toggleLoggedIn={toggleIsAuthenticated}/>
                </Route>
                <PrivateRoute exact path="/blogposts" isAuth={isAuthenticated}>
                    <BlogOverviewPage/>
                </PrivateRoute>
                <PrivateRoute exact path="/blog/:blogId" isAuth={isAuthenticated}>
                    <BlogpostPage/>
                </PrivateRoute>
            </Switch>

        </Router>
    );
}

export default App;
