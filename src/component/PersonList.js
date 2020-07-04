import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
 class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogs:{}
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/api-laravel/laravel/public/api/blog')
        .then(res => {
            console.log(res.data.blog.data)
            const blogs = res.data.blog.data; //du lieu tra ve tu api
            this.setState({blogs})
        })
        .catch(error => console.log(error)) 
    }
    inPost(){
        let blog = this.state.blogs;
        return Object.keys(blog).map(function(key,index){
            let link = "http://localhost:8080/api-laravel/laravel/public/upload/Blog/image/" + blog[key]['image'];
            return (
                <div className="single-blog-post" key={index}>
                    <h3>{blog[key]['title']}</h3>
                    <div className='post-meta'>
                        <ul>
                            <li><i className='fa fa-user' /> Mac Doe</li>
                            <li><i className='fa fa-clock-o' /> 1:33 pm</li>
                            <li><i className='fa fa-calendar' /> DEC 5, 2013</li>
                        </ul>
                        <span>
                            <i className='fa fa-star' />
                            <i className='fa fa-star'/>
                            <i className='fa fa-star' />
                            <i className='fa fa-star' />
                            <i className='fa fa-star-half-o'/>
                        </span>
                        <a href>
                            <img src={link}/>
                        </a>
                        <p>{blog[key]['description']}</p> 
                        <Link className="btn btn-primary" to = {"/blog/single/" + blog[key]['id']}>Read More</Link>
                    </div> 
                </div>     
            )
        })
    }
    render() {
        return (
           <div>
                {this.inPost()}
           </div>
        )
    }
}
export default PersonList
