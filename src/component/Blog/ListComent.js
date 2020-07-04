import React, { Component } from 'react'

export default class ListComent extends Component {
    constructor(props) {
        super(props);
       // this.inComment = this.inComment.bind(this) 
        this.handleReply = this.handleReply.bind(this)
    }
    handleReply(e){
      let id = e.target.id
      console.log(id)
      this.props.getId(id)
    }
    inComment(){
      let array = this.props.array
      console.log(array)
      let {comment} = this.props
      console.log(comment)
      // // let subcomment = comment.concat(array)
      let subcomment = [].concat(comment,array)
        console.log(subcomment)
      if (comment instanceof Array){
        
          return  comment.map((item,index) => {
            if(item.id_comment == 0){
              return (
                <React.Fragment key={index} >
                <li className="media" >
                        <a className="pull-left" href="#">
                          <img className="media-object" src={"http://localhost:8080/api-laravel/laravel/public/upload/user/avatar/"+ item.image_user}  alt="" />
                        </a>
                        <div className="media-body">
                          <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user" />{item.name_user}</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                          </ul>
                        <p>{item.comment}</p>
                        <a className="btn btn-primary" href="#rep" onClick={this.handleReply} id={item.id} ><i className="fa fa-reply" />Replay</a>
                      </div>
                </li> 
                {subcomment.map((item2, j) => {
                  if(item.id == item2.id_comment) {
                      return (
                          <li key={j} index={j} className="media second-media">
                              <a className="pull-left" href="#">
                                  <img className="media-object" src={"http://localhost:8080/api-laravel/laravel/public/upload/user/avatar/"+ item2.image_user}  alt="" />
                              </a>
                              <div className="media-body">
                                <ul className="sinlge-post-meta">
                                  <li><i className="fa fa-user" />{item2.name_user}</li>
                                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                </ul>
                                <p>{item2.comment}</p>
                              </div>
                          </li>
                      );
                      {/* console.log("ok") */}
                  }
                })}
                </React.Fragment>
              )
            }
            
          })
      // console.log(111)
    }
  }
    render() {
     
        return (
            <div>
                <div className="response-area">
                <h2>3 RESPONSES</h2>
                 <ul className="media-list">
                    {this.inComment()}
                 </ul>					 
              </div>
            </div>
        )
    }
}

