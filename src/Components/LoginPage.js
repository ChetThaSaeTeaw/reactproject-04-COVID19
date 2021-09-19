import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
    return (
        <React.Fragment>
            <div className="overlay"></div>
            <div className="container">
                <form className="form">
                    <h1>Log in</h1>
                    <input type="text" placeholder="Enter Email address"/>
                    <input type="password" placeholder="Enter Password" />
                    <div className="check-input">
                        <div>
                            <input type="checkbox" />
                            <label>REMEMBER ME</label>
                        </div>
                        <Link to="/login">FORGOT PASSWORD</Link>
                    </div>
                    <button className="button-login">LOG IN</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;
