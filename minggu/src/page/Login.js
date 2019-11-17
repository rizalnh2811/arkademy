import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <h5 class="card-header">Login</h5>
                    <form action="" method="POST">
                        <div class="row col-md-6">
                            <h5>Welcome</h5>
                            <label>username</label>
                            <input type="text" class="form-control" placeholder="input username"></input>
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="password"></input>
                            <a href="/dashboard" path="/dashboard" Component={Dashboard}>Login</a>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;