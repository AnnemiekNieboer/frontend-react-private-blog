import React from 'react';
import {
    useHistory
} from "react-router-dom";

function LoginPage({toggleLoggedIn}) {
    const history = useHistory();

    function signIn() {
        toggleLoggedIn(true);
        history.push("/");
    }

    return (
        <div className="outer-container">
            <h1>Log hier in</h1>
            <p>Druk op de knop om in te loggen</p>
            <button onClick={signIn} type="button">Login</button>
        </div>
    );
}

export default LoginPage;