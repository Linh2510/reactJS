import React, { Component } from 'react';
import ErrorForm from './ErrorForm'
import LoginFrom from './LoginFrom'
import RegisterForm from './RegisterForm';
class login extends Component {
    render() {
        return (
            <div>
                 <section id="form">
                 <div className="container">
                    <div className="row">
                    <div className="col-sm-4 col-sm-offset-1">
                        <LoginFrom />
                        {/*/login form*/}
                    </div>
                    <div className="col-sm-1">
                        <h2 className="or">OR</h2>
                    </div>
                    <div className="col-sm-4">
                        <RegisterForm />
                    </div>
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default login;
