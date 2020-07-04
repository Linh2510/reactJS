import React, { Component } from 'react'
import axios from 'axios';

export default class PersonListPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            tuoi:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(ev){
        this.setState({
            [ev.target.name] : ev.target.value
        })
    }
    handleSubmit(ev){
        ev.preventDefault();
        const user = {
            name: this.state.name,
            age : this.state.tuoi
        };
        axios.post('https://jsonplaceholder.typicode.com/users',{user})
        .then(res => {
            // console.log(res)
            console.log(res.data)
        })
       
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        PersonName:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        PersonName:
                        <input type="text" name="tuoi" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
