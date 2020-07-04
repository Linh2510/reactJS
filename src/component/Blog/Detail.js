import React, { Component } from 'react'
import axios from 'axios'
import Rate from './Rate'
import ListComment from './ListComent'
import Comment from './Comment'
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            blogs:{},
            comment: {},
            array:{},
            idBlog :'',
            idSubComment: ''
        }
        this.getId = this.getId.bind(this)
        this.getArray = this.getArray.bind(this)
    }
    
    componentDidMount() {
        let id = this.props.id
        axios.get('http://localhost:8080/api-laravel/laravel/public/api/blog/detail/' + id)
        .then(res => {
            console.log(res)
            // console.log(res.data.data)
            const blogs = res.data.data; 
            const comments = res.data.data.comment
            this.setState({
              blogs: blogs,
              comment: comments
            })
        })
        .catch(error => console.log(error)) 
    }
    getId(id){
      this.setState({
        idSubComment: id
      })
    }
    getArray(arr){
        this.setState(
          { 
            array : arr
          }
        )
    }
    inSignle(){
      let blogs = this.state.blogs
      let idBlog = blogs.id
      
        return(
           <div className="single-blog-post" key={blogs.toString()}>
              <h3>{blogs.title}</h3>
              <div className="post-meta">
                  <ul>
                    <li><i className="fa fa-user" /> Mac Doe</li>
                    <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                    <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                  </ul>
                 <Rate />
              </div>
              <a href><img src={"http://localhost:8080/api-laravel/laravel/public/upload/Blog/image/" + blogs.image} alt="" /></a>
              <p>{blogs.description}</p>
              <div className="pager-area">
                <ul className="pager pull-right">
                  <li><a href="#">Pre</a></li>
                  <li><a href="#">Next</a></li>
                </ul>
              </div>
              <ListComment idBlog ={this.state.id_blogs} comment={this.state.comment} idSubComment={this.state.idSubComment} getId={this.getId} array={this.state.array}/>{/*/Response-area*/}
              <Comment idBlog={idBlog} idSubComment = {this.state.idSubComment} getArray={this.getArray} /> {/*/Repaly Box*/}
             </div>
            
         )
         
    }
    render() {
        return (
            <div>
                {this.inSignle()}
               
            </div>
        )
    }
}
