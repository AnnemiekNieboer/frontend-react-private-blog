import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import BlogOverviewPage from "./pages/BlogOverviewPage";
import BlogpostPage from "./pages/BlogpostPage";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <NavLink className="nav-link" exact to="/">Homepage</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/blogposts">Blog</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/blogposts">
                    <BlogOverviewPage/>
                </Route>
                <Route path="/blog/:blogId">
                    <BlogpostPage/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
