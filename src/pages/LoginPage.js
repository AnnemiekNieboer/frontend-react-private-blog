import React from 'react';
import {
    Link
} from "react-router-dom";

function LoginPage(props) {
    return (
        <div className="outer-container">
            <h1>Log hier in</h1>
            <p>Druk op de knop om in te loggen</p>
            <Link to="/blogposts">
                <button type="button">Login</button>
            </Link>
        </div>
    );
}

export default LoginPage;