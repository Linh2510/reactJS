import React, { Component } from 'react'
import axios from 'axios'
export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          comment: "",
          listcomment:"",
          id:""
        })
        this.handleChange = this.handleChange.bind(this)
        this.handlePostComment = this.handlePostComment.bind(this)
        this.inComment = this.inComment.bind(this)
    }
    handleChange(e){
      let value =  e.target.value  
      this.setState ({
        comment : value
      })
    }
    handlePostComment(e){

      e.preventDefault()
      let data = JSON.parse(localStorage.getItem("data"));
      let token = data.success.token
      let config = {
        headers: {
        'Authorization': 'Bearer '+ token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
        }
      }; 
      
      let comment = this.state.comment
      if(comment) {
          const formData = new FormData();
            formData.append('id_blog', this.props.idBlog);
            formData.append('id_user', data.Auth.id);
            formData.append('id_comment', this.props.idSubComment ? this.props.idSubComment : 0);
            formData.append('comment', this.state.comment);
            formData.append('image_user', data.Auth.avatar);
            formData.append('name_user', data.Auth.name);
          
      let url = "http://localhost:8080/api-laravel/laravel/public/api/blog/comment/"+this.props.idBlog
      axios.post(url,formData,config)
        .then(res => {
            console.log(res.data.data)
            let listcomment = res.data.data
            this.setState({
              listcomment: listcomment
            })
            this.props.getArray(listcomment);
        })
      }
      this.setState({
        comment:""
      })
    }
    
    inComment(){
      let listcomment= this.state.listcomment;
      let comment = this.state.comment
        if(listcomment.id_comment == 0){
          return(
              
                <li className="media">
                  <a className="pull-left" href="#">
                    <img className="media-object" src={"http://localhost:8080/api-laravel/laravel/public/upload/user/avatar/"+ listcomment.image_user} alt="" width="10%" />
                  </a>
                  <div className="media-body">
                    <ul className="sinlge-post-meta">
                      <li><i className="fa fa-user" />{listcomment.name_user}</li>
                      <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                      <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                      </ul>
                      <p>{listcomment.comment}</p>
                      <a className="btn btn-primary" onClick={this.handleChange}><i className="fa fa-reply" />Replay</a>
                  </div>
                </li>
              
          )
      }
    }
    render() {
      
        return (
            <div>
              <ul className="media-list">
              {this.inComment()}
              </ul>
                <div className="replay-box" id="rep">
                <div className="row">
                  {/* <div className="col-sm-4">
                    <h2>Leave a replay</h2>
                    <form>
                      <div className="blank-arrow">
                        <label>Your Name</label>
                      </div>
                      <span>*</span>
                      <input type="text" placeholder="write your name..." />
                      <div className="blank-arrow">
                        <label>Email Address</label>
                      </div>
                      <span>*</span>
                      <input type="email" placeholder="your email address..." />
                      <div className="blank-arrow">
                        <label>Web Site</label>
                      </div>
                      <input type="email" placeholder="current city..." />
                    </form>
                  </div> */}
                  <div className="col-sm-12">
                    <div className="text-area">
                      <div className="blank-arrow">
                        <label>Your Name</label>
                      </div>
                      <span>*</span>
                      <textarea name="message" rows={11} defaultValue={""} value={this.state.comment} onChange={this.handleChange}/>
                      <a className="btn btn-primary" onClick= {this.handlePostComment}>post comment</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
