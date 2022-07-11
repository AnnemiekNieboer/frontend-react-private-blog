import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function Navigation({isAuth, toggleAuth}) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push("/")
    }

    return (
        <nav>
            <ul className="navigation-list">
                <li>
                    <NavLink className="nav-link" exact to="/">Homepage</NavLink>
                </li>
                {isAuth === true ?
                    <>
                        <li>
                            <NavLink className="nav-link" to="/blogposts">Blog</NavLink>
                        </li>
                        <li>
                            <button type="button" onClick={signOut}>Uitloggen</button>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navigation;