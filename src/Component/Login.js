import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link></Link>
            <div className="container">

                <h1>SignIn</h1>
                <form>
                <h5>email</h5>
                <input type="email"/>
                <h5>Password</h5>
                <input type="password"/>
                <button>Sine in</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login
