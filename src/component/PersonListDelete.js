import React, { Component } from 'react'
import axios from 'axios'
export default class PersonListDelete extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){

        this.setState({
            id : e.target.value
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        axios.delete('https://jsonplaceholder.typicode.com/users/' + this.state.id)
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
                        Id:
                        <input type="text" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">delete</button>
                </form>
            </div>
        )
    }
}
