import React, { Component } from 'react'
import axios from 'axios'
export default class LoginFrom extends Component {
    constructor(props) {
        super(props);
        this.state ={
            pass:'',
            email:'',
            ErrorEmail:'',
            ErrorPass:'',
            dataUser:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    }
  
    handleChange(e){
       let getName = e.target.name
       let value = e.target.value
       this.setState({
           [getName] : value
       });
    }
    handleSubmitLogin(e){
        e.preventDefault();
        let flag = true;
        let pass = this.state.pass
        let email = this.state.email 
       
        if(email == ''){
            this.setState({
                ErrorEmail :" vui long nhap email"
            })
            flag = false
        }
        if( pass == ''){
            this.setState({
                ErrorPass:" vui long mat khau"
            })
            flag = false
        }
        if(flag){
            const user = {
                email : email,
                password :pass
            }
            // console.log(user)
            axios.post('http://localhost:8080/api-laravel/laravel/public/api/login',user)
            .then(res => {
                // console.log(res)
                console.log(res.data);
                const dataUser = res.data;
                this.setState({
                    dataUser: dataUser
                })
                localStorage.setItem("data",JSON.stringify(dataUser));
            })
            this.setState({
                ErrorName: "",
                ErrorPass: ""
            });
        }
        // let a = this.state.dataUser
        
    }
    
    render() {
        return (
            <div>
                <div className="login-form">{/*login form*/}
                        <h2>Login to your account</h2>
                        <form action="#" onSubmit={this.handleSubmitLogin}>
                            <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                            <p>{this.state.ErrorEmail}</p>

                            <input type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handleChange} />
                            <p> {this.state.ErrorPass}</p>
                            <span>
                            <input type="checkbox" className="checkbox"  /> 
                                    Keep me signed in
                            </span>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                </div>
            </div>
        )
    }
}

