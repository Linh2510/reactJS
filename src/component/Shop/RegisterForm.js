import React, { Component } from 'react'
import axios from 'axios'
import ErrorForm from '../Shop/ErrorForm'
export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email:'',
            password:'',
            phone:'',
            address:'',
            country:'',
            avatar:'',
            file:'',
            data:{},
            formError: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUserInputFile = this.handleUserInputFile.bind(this)
        this.handleSubmitRegister = this.handleSubmitRegister.bind(this);
    }
  
    handleChange(e){
       let getName = e.target.name
       let value = e.target.value
       this.setState({
           [getName] : value
       });
    }

    handleUserInputFile (e){
        const file = e.target.files;
        console.log(file)
        // // send file to api server
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                avatar: e.target.result, //cai nay de gui qua api
                file: file[0] //cai nay de toan bo thong file upload vao file de xuong check validate
            })
        };
        reader.readAsDataURL(file[0]);
    }
    handleSubmitRegister(e){
        e.preventDefault();
        let flag = true
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let address = this.state.address;
        let country= this.state.country;
        let phone = this.state.phone;
        let file = this.state.file;
        let ErrorRes = this.state.formError;
        let check = ['jpg','png']
        let mang = file['name'].split(".")
        let data = this.state.data
        let avatar = this.state.avatar
        // console.log(file.length)
        if(name == '' ){
            ErrorRes.name = " vui long nhap ten"
            flag = false
        }
        if(email == '' ){
            ErrorRes.email = "vui long nhap email"
            flag = false
        }
        if(password == '' ){
            ErrorRes.password = "vui long nhap mat khau"
            flag = false
        }
        if(phone == '' ){
            ErrorRes.phone = "vui long nhap so dien thoai"
            flag = false
        }
        if(country == '' ){
            ErrorRes.country = "vui long nhap quoc tich"
            flag = false
        }
        if(address == '' ){
            ErrorRes.password = "vui long nhap dia chi"
            flag = false
        }

        // if(Object.keys(file).length === 0 ){
        //     ErrorRes.file = "vui long nhap hinh anh"
        //     flag = false
        // }
        if(flag){
            data.name = name
            data.email = email
            data.password = password
            data.phone = phone
            data.address = address
            data.country = country
            data.level = 0
            data.avatar = avatar
            // data.avatar = file['name']
                if(check.includes(mang[1])){
                    if(file['size'] > 1048576){
                            alert("vui long nhap file duoi 1mb")
                    }
                    else {
                        axios.post('http://localhost:8080/api-laravel/laravel/public/api/register',data)
                        .then(res => {
                            // console.log(res)
                            console.log(res.data)
                        })
                        this.state ={
                            name: '',
                            email:'',
                            password:'',
                            phone:'',
                            address:'',
                            country:'',
                            formError: {}
                        }
                    }
                }
                else{
                    alert("vui long nhap file hinh anh co duoi jpd png ")
                }
         }
        // console.log(ErrorRes);
        if(!flag){
            this.setState({
                formError : ErrorRes
            });
        }
        if(flag){
            this.setState({
                formError : {}
            });
        }
    }
    
    render() {
        return (
            <div>
                <div className="signup-form">{/*sign up form*/}
                        <h2>New User Signup!</h2>
                        <div className="signup-form-error">
                            {/* {this.RenderError()} */}
                            <ErrorForm errorform = {this.state.formError} />
                        </div>
                        <form action="#" onSubmit={this.handleSubmitRegister}>
                            <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
                            <input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange} />
                            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                            <input type="phone" placeholder="Phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                            <input type="address" placeholder="Address" name="address" value={this.state.address} onChange={this.handleChange}/>
                            <input type="country" placeholder="Country" name="country" value={this.state.country} onChange={this.handleChange}/>
                            <input type="file" placeholder="Choose Avatar" name="avatar" onChange={this.handleUserInputFile}/>
                            <button type="submit" className="btn btn-default" >Signup</button>
                        </form>
                        </div>{/*/sign up form*/}
            </div>
        )
    }
}
